abstract class DataExporter {
    fetchData() {
        console.log("data fetched");
        return "John Doe, Jane Doe";
    }

    transformData(data: string) {
        console.log("data transformed");
        return data;
    }   

    abstract formatData (data: string): string

    save (formatted: string){
        console.log("data saved")
    }

    export(){
        let data = this.fetchData();
        data = this.transformData(data);
        let formatted = this.formatData(data);
        this.save(formatted);
    }
}

class CVSExported extends DataExporter {
    formatData(data: string): string {
        console.log("cvs format");
        return data
    }
}
class JSONExported extends DataExporter {
    formatData(data: string): string {
        console.log("json format");
        return data
    }
}