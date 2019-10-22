var penPromise=d3.json("penguins/penguins/classData.json")
penPromise.then(function(penData)
                {
    GetImages(penData)
    console.log(GetQuizMean(penData[0].quizes))
    console.log("penData", penData);
},
                function(err)
{
    console.log("fail",err)
})
var GetQuizMean= function(quizes)
{
   var quizGrades = quizes.map(function (quiz) {
                          return quiz.grade
                          })
    return d3.mean(quizGrades)
}
    
var GetImages=function(penData){
var row= d3.select("tbody").append("tr")
    .selectAll("tr")
    .data(penData)
    .enter()
    .append("tr")
    row.append("img")
        .attr("src", function(d)
         {
        return "penguins/penguins/" + d.picture;
    })
    
    row.append("td")
        .text(function(d)
        {
        return GetQuizMean(penData.quizes);
        })
    row.append("td")
    row.append("td")

}
