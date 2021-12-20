export const WEEK_DAYS = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
export const LOCAL_STORAGE_KEY = "calenderStore"

export const storeData = (storeObj) => {
    let arr = [];

    let val = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (val) {
        //merge ans store
        let parsedArr = JSON.parse(val);
        if (parsedArr) {
            //will optimize
            let arrToStore = []
            for (let i = 0; i < parsedArr.length; i++) {
                let item = parsedArr[i];

                if (item.timeStamp < storeObj.timeStamp) {
                    // arrToStore.push(item)
                }
                else {
                    arrToStore = [...parsedArr.slice(0, i), storeObj, ...parsedArr.slice(i, parsedArr.length)];
                    break;
                }

            }
            if (arrToStore.length === 0) {
                arrToStore = [...parsedArr, storeObj]
            }

            window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arrToStore));
        }



    }
    else {
        //initialise and store
        arr.push(storeObj)
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arr))
    }

}