import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  async submitRegiter(data: any) {
    let result = await this.http
      .post<any>(
        'https://digitech.sut.ac.th/test-project/addApplicant.php',
        {
          data: data,
        },
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        }
      )
      .toPromise();

    if (result.status === 200) {
      return result;
    } else {
      return false;
    }
  }
}
