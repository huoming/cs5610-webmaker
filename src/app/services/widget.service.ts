
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class WidgetService{

  baseUrl = environment.baseUrl;

  //constructor(private _http: Http) {}
  constructor(private _http: HttpClient) {}

  /*createWidget(pageId, widget){
    const url = this.baseUrl+'/api/page/'+pageId+'/widget';
    return this._http.post(url, widget)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        });
  }*/

  createWidget(pageId, widget){
    const url = this.baseUrl+'/api/page/'+pageId+'/widget';
    return this._http.post(url, widget);
  }

  /*findWidgetsByPageId(pageId) {
    const url = this.baseUrl+'/api/page/'+pageId+'/widget';
    return this._http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }*/

  findWidgetsByPageId(pageId) {
    const url = this.baseUrl+'/api/page/'+pageId+'/widget';
    return this._http.get(url);
  }

  /*findWidgetById(widgetId) {
    const url = this.baseUrl+'/api/widget/'+widgetId;
    return this._http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }*/

  findWidgetById(widgetId) {
    const url = this.baseUrl+'/api/widget/'+widgetId;
    return this._http.get(url);
  }

  /*updateWidget(widgetId, widget) {
    const url = this.baseUrl+'/api/widget/'+widgetId;
    return this._http.put(url, widget)
      .map(
        (res: Response) => {
          const data = res;
          return data;
        }
      );
  }*/

  updateWidget(widgetId, widget) {
    const url = this.baseUrl+'/api/widget/'+widgetId;
    return this._http.put(url, widget);
  }

  /*deleteWidget(widgetId) {
    const url = this.baseUrl+'/api/widget/'+widgetId;
    return this._http.delete(url)
      .map(
        (res: Response) => {
          const data = res;
          return data;
        }
      );
  }*/


  deleteWidget(widgetId) {
    const url = this.baseUrl+'/api/widget/'+widgetId;
    return this._http.delete(url);
  }

  /*reorderWidgets(startIndex, endIndex, pageId) {

    const url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
    return this._http.put(url, '');
  }*/

  reorderWidgets(startIndex, endIndex, pageId) {

    const url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
    return this._http.put(url, '');
  }
}
