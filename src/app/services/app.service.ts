export class AppService {
    moduleName:string;
    getModuleName() {
        return this.moduleName;
    }

    setModuleName(moduleName:string){
        this.moduleName = moduleName;
    }

}
