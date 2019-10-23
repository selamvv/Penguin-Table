var penPromise=d3.json("penguins/penguins/classData.json")
penPromise.then(function(penData)
                {
    console.log(GetQuizMean(penData[0].quizes))
    console.log(GetHomeworkMean(penData[0].homework))
    console.log(GetTestMean(penData[0].test))
    GetImages(penData)
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

var GetHomeworkMean= function(homework)
{
    var hwGrades = homework.map(function (hw){
        return hw.grade
    })
    return d3.mean(hwGrades)
}

var GetTestMean = function(tests)
{
    var testGrades = tests.map(function (test){
        return test.grade
    })
    return d3.mean(testGrades)
}

var GetGrade = function(assignments)
{
    
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
        return GetQuizMean(d.quizes);
        })
    row.append("td")
        .text(function(d)
        {
        return GetHomeworkMean(d.homework);
        })
    row.append("td")
        .text(function(d)
        {
        return GetTestMean(d.test);
        })
    row.append("td")
        .text(function(d)
        {
        return d.final;
        })
    row.append("td")
        .text(function(d)
        {
        return GetGrade
        })
    
}
