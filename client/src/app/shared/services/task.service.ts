import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Itask } from "../models";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor(private apiService: ApiService) {}
  addNewTask(task: Itask): Promise<Itask> {
    return new Promise((resolve, reject) => {
      this.apiService
        .post(environment.task_url, task)
        .toPromise()
        .then(resolve)
        .catch(reject);
    });
  }
  updateTask(task: Itask): Promise<Itask> {
    return new Promise((resolve, reject) => {
      this.apiService
        .put(environment.task_url, task)
        .toPromise()
        .then(resolve)
        .catch(reject);
    });
  }
  getAllTasks(page: number, limit: number = 10): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService
        .get(`${environment.task_url}/${page}/${limit}`)
        .toPromise()
        .then(resolve)
        .catch(reject);
    });
  }
  deleteTask(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService
        .delete(`${environment.task_url}/${id}`)
        .toPromise()
        .then(resolve)
        .catch(reject);
    });
  }
}
