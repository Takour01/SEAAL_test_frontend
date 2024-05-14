import { DataSource } from "@angular/cdk/collections";
import { Observable, ReplaySubject } from "rxjs";
import Manager from "../../models/Manager";

class ManagersDartaSource extends DataSource<Manager> {
    private _dataStream = new ReplaySubject<Manager[]>();

    constructor(initialData: Manager[]) {
        super();
        this.setData(initialData);
    }

    connect(): Observable<Manager[]> {
        return this._dataStream;
    }

    disconnect() { }

    setData(data: Manager[]) {
        this._dataStream.next(data);
    }
}



export default ManagersDartaSource