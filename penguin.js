
var penPromise=d3.json("penguins/penguins/classData.json")
penPromise.then(function(penData)
                {
    GetImages(penData)
    console.log("penData", penData);
},
                function(err)
{
    console.log("fail",err)
})
var GetQuizMean= function(quizes)
{
   var quizGrades = quizes.map(function(quiz) {
                          return quiz.grade
                          })
    return d3.mean(quizGrades)
    
}
var GetHwMean=function(homework)
{
    var hwGrades= homework.map(function(hw){
        return hw.grade
    })
    
    return d3.mean(hwGrades)
}
var GetTestMean= function(test){
    
    var testGrades= test.map(function(test){
        return test.grade
    })
    return d3.mean(testGrades)
}
var Getfinal= function(final){
    finalScore= final.map(function(d){
        return d.grade})
    return d3.mean(finalScore)}

var GetScore= function(grade){
    var score =
        GetQuizMean(grade)*.2 +
                GetHwMean(grade)*
                .15+GetTestMean(grade)*
                .3+Getfinal(grade)*.35
    return score;}



var GetImages=function(penData){
 
var row= d3.select("tbody")
    .selectAll("tr")
    .data(penData)
    .enter()
    .append("tr")
    row.append("td").append("img")
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
        return GetHwMean(d.homework);      
        })
    row.append("td")
        .text(function(d)
             {
        return GetTestMean(d.test);
        })
    row.append("td")
        .text(function(d)  
              {   
        return Getfinal(d.final);})
      //style("color", 
       // .text (function(d){
        //    var troublegrade= Getfinal(d)
        //    if (troublegrade<70){
         //       text.style.color= "orange"}})
}
          
    