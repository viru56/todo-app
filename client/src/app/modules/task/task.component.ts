import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Itask, TaskService } from "src/app/shared";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"]
})
export class TaskComponent implements OnInit {
  todoForm: FormGroup;
  serverError: string;
  task: Itask;
  tasks: Itask[] = [];
  total: number;
  page: number;
  limit: number;
  pages: number;
  loading: boolean;
  submitBtn: string;
  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.task = null;
    this.submitBtn = "Add new task";
    this.page = 1;
    this.limit = 10;
    this.getAllTask();
    this.buildForm();
  }
  getAllTask() {
    this.loading = true;
    this.taskService
      .getAllTasks(this.page, this.limit)
      .then(tasks => {
        this.tasks = tasks.docs;
        this.total = tasks.total;
        this.page = tasks.page;
        this.limit = tasks.limit;
        this.pages = tasks.pages;
        this.loading = false;
      })
      .catch(console.log);
  }
  getTask(operation: string) {
    if (operation == "next") {
      if (this.page >= this.pages) return;
      this.page = this.page + 1;
    } else {
      if (this.page == 1) return;
      this.page = this.page - 1;
    }
    this.getAllTask();
  }
  onSubmit() {
    if (this.task) {
      this.todoForm.value.id = this.task.id;
      this.taskService
        .updateTask(this.todoForm.value)
        .then(() => {
          this.page = 1;
          this.limit = 10;
          this.getAllTask();
          this.todoForm.reset();
          this.submitBtn = "Add new task";
          this.task = null;
          this.toastr.success("Task is updated");
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.taskService
        .addNewTask(this.todoForm.value)
        .then(() => {
          this.page = 1;
          this.limit = 10;
          this.getAllTask();
          this.todoForm.reset();
          this.toastr.success("New task is created");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  buildForm() {
    this.todoForm = this.fb.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]]
    });
  }
  editTask(task) {
    this.task = task;
    this.todoForm.reset(task);
    this.submitBtn = "Update Task";
    window.scrollTo(0, 0);
  }
  deleteTask(taskId) {
    this.taskService
      .deleteTask(taskId)
      .then(() => {
        this.toastr.info("Task is deleted");
        this.getAllTask();
      })
      .catch(console.log);
  }
}
