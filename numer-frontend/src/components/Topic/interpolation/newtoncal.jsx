
const newtonDividedDifference = (points, x) => {
    let n = points.length;
    let divDiffTable = [];
    for (let i = 0; i < n; i++) {
      divDiffTable.push([points[i].y]);
    }
    for (let j = 1; j < n; j++) {
      for (let i = 0; i < n - j; i++) {
        divDiffTable[i].push((divDiffTable[i + 1][j - 1] - divDiffTable[i][j - 1]) / (points[i + j].x - points[i].x));
      }
    }
    let result = divDiffTable[0][0];
    let term = 1;
    for (let i = 1; i < n; i++) {
      term *= (x - points[i - 1].x);
      result += divDiffTable[0][i] * term;
    }
    return result;
  }

  export const DataNewton = (points,x)=>{


    let datasource = [];
    let min = points[0].x;
    let max = points[points.length-1].x;
    let gap = (max-min) / 100;

    for(let i =min ;i <= (max+gap); i += gap){
       datasource.push({
          x:i,
          y:newtonDividedDifference(points,i)
       })
    }

    if(!datasource.find((e)=> e.x === x)){
          datasource.push({
            x:x,
            y:newtonDividedDifference(points,x)
        })
    
        datasource.sort((a,b)=> a.x - b.x);
    }
 

    return datasource;
      
  }