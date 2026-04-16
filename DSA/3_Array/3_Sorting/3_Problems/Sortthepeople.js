
var sortPeople = function(names, heights) {
    let map = new Map();
    for(let i = 0 ; i < heights.length ; i++){
        map.set(heights[i] , names[i])
    }
    heights.sort((a,b)=>b-a)

    let ans = new Array()
    for(let i = 0 ;i<heights.length ; i++){
        ans.push(map.get(heights[i]))
    }
    return ans
};
