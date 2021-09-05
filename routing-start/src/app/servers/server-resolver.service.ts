import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "./servers.service";

interface ServerData {
    id: number, name: string, status: string
}

@Injectable()
export class ServerResolver implements Resolve<ServerData>{

    constructor(private serverSerivce: ServersService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ServerData | Observable<ServerData> | Promise<ServerData> {
        console.log(route.params);
        console.log(route.paramMap)

        return this.serverSerivce.getServer(+route.params['id']);
        // throw new Error("Method not implemented.");
    }


}