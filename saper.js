/**
 * Created by McPander on 18.05.2018.
 */
const fs = require('fs');
fs.readFile((__dirname + '/input'), 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    const matrix = data.split('\n').map(line=>(line.trim().split(' ')));
    const resultMatrix = matrix.map((line,lineIndex)=>{
        return line.map((point,pointIndex) => {
            let count = 0;
            if(point == 'O'){
                for(let l = lineIndex - 1;l <= lineIndex + 1;l++){
                    for(let p = pointIndex - 1;p <= pointIndex + 1;p++){
                        if(matrix[l] && matrix[l][p] && matrix[l][p] == 'X'){
                            count++;
                        }
                    }
                }
            }
            return count ? count : point;
        })
    })
    console.log(resultMatrix.map(line=>(line.join(' '))).join('\n'))
});