class JSONUtils {
    static transform(data) {
        return data.reduce( (obj, val) => {
            var index = obj.map(r => r.name).indexOf(val.river);
            if(index !== -1) {
                obj[index].data.push({
                    number_of_trolleys: val.number_of_trolleys||'N/A',
                    year: val.year
                });
            } else {
                obj.push({
                    name: val.river,
                    data: [{
                        number_of_trolleys: val.number_of_trolleys||'N/A',
                        year: val.year
                    }]
                });
            }
            return obj;
        }, []);
    }
}
export default JSONUtils;