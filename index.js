////////// Now : Date in website ///////////////

var now = new Date ();
var gfy = now.getFullYear();
var gm = now.getMonth() + 1;
var gd = now.getDate();
var nowDefault = gfy+"-"+gm+"-"+gd ;
typeof nowDefault;


function dayTimeFix () {

  var check = gd-10;

  if (check < 0){
    return "0"+gd
  }
  else{
    return gd
  }
}


var gdFix = dayTimeFix();
gdFix;

function monthTimeFix () {

  var check = gm-10;

  if (check < 0){
    return "0"+gm
  }
  else{
    return gm
  }
}

var gmFix = monthTimeFix();
gmFix;

var nowDefaultFix = gfy+"-"+gmFix+"-"+gdFix ;
nowDefaultFix;

var pushCurrentTime = document.getElementById("nowDate").defaultValue = nowDefaultFix ;
//var pushCurrentTimeForExpirDate = document.getElementById("expirationDate").defaultValue = nowDefaultFix ;

var getCurentTime = document.getElementById("nowDate").value;


var currentTimeMili = now.getTime();

////////////////////////////////////////////////////////////////////////////////////

// put in Expir date with Date picker, need 7 digit new Date (2020,8,4,15,0,0,0) = "09/04/2020" on date picker at 3pm chicago....
// right now it date picker "09/04/2020" is GMT -5 hours so you get sep 3, 2020 at 7pm chicago time (date picker in new Date () gives you GMT midnight in chicago which is still the prevous day)


// var expirDate1 = document.getElementById("expirationDate").value;
// expirDate1Time = new Date (expirDate1);
// expirDate1Time;
//
// var expirDate1TimeMili = expirDate1Time.getTime();
//
// var daysToExpirMili = expirDate1TimeMili - currentTimeMili;
// daysToExpirMili;
//
// var millisecondsPerDay = 24 * 60 * 60 * 1000 ;
//
// var daysToExpirCurrent = daysToExpirMili / millisecondsPerDay ;
// daysToExpirCurrent;


////////////////////////////
//fix to the GMT problem detailed above

// var expir1GFY = expirDate1Time.getFullYear();
// expir1GFY;
// var expir1GM = expirDate1Time.getMonth();
// expir1GM;
// var expir1GD = expirDate1Time.getDate() + 1;
// expir1GD;
// var expirDate1Fix = new Date (expir1GFY, expir1GM, expir1GD, 15, 0, 0, 0 )
// expirDate1Fix;
// var expirDate1FixTimeMili = expirDate1Fix.getTime();
// expirDate1FixTimeMili;
// var daysToExpirMiliFix = expirDate1FixTimeMili - currentTimeMili;
// daysToExpirMiliFix;
//
// var millisecondsPerDay = 24 * 60 * 60 * 1000 ;
//
// var daysToExpir1CurrentFix = daysToExpirMiliFix / millisecondsPerDay ;
// daysToExpir1CurrentFix;
//
// var pushDaysToExpir1 = document.getElementById("dte").value = daysToExpir1CurrentFix.toFixed(2);
// pushDaysToExpir1;


//function pushDaysToExpirCalc() {
//  pushDaysToExpir1;
//}

function pushDaysToExpirCalc () {

  var expirDate1 = document.getElementById("expirationDate").value;
  expirDate1Time = new Date (expirDate1);
  expirDate1Time;

  var expirDate1TimeMili = expirDate1Time.getTime();

  var daysToExpirMili = expirDate1TimeMili - currentTimeMili;
  daysToExpirMili;

  var millisecondsPerDay = 24 * 60 * 60 * 1000 ;

  var daysToExpirCurrent = daysToExpirMili / millisecondsPerDay ;
  daysToExpirCurrent;

  //////

  var expir1GFY = expirDate1Time.getFullYear();
  expir1GFY;
  var expir1GM = expirDate1Time.getMonth();
  expir1GM;
  var expir1GD = expirDate1Time.getDate() + 1;
  expir1GD;
  var expirDate1Fix = new Date (expir1GFY, expir1GM, expir1GD, 15, 0, 0, 0 )
  expirDate1Fix;
  var expirDate1FixTimeMili = expirDate1Fix.getTime();
  expirDate1FixTimeMili;
  var daysToExpirMiliFix = expirDate1FixTimeMili - currentTimeMili;
  daysToExpirMiliFix;

  var millisecondsPerDay = 24 * 60 * 60 * 1000 ;

  var daysToExpir1CurrentFix = daysToExpirMiliFix / millisecondsPerDay ;
  daysToExpir1CurrentFix;

  var pushDaysToExpir1 = document.getElementById("dte").value = daysToExpir1CurrentFix.toFixed(2) * 1;
  pushDaysToExpir1;

}

/////////////////////////////////////////////////////////////////////////////////////
// this function changes the days to expiration with a hard input on days (not a date pick..but changes the date picker day)
// there might be a prob with gmHard...uses +1...might be right before 3pm Chicago and wrong after...pushing date 1 day to far...


// function hardCodeDaysToExpir1 () {
//
//   //var expirDate1 = document.getElementById("expirationDate").value;
//   //expirDate1Time = new Date (expirDate1);
//   //expirDate1Time;
//
//   //var expirDate1TimeMili = expirDate1Time.getTime();
//
//   var millisecondsPerDay = 24 * 60 * 60 * 1000 ;
//
//
//   var tAdd = document.getElementById("hardCodeDaysToExpir").value;
//   var hardCodeDate = tAdd * millisecondsPerDay ;
//   hardCodeDate;
//
//   //expirDate1Time;
//   //expirDate1TimeMili;
//   currentTimeMili;
//   hardCodeDate;
//   var nDTE = currentTimeMili + hardCodeDate;
//   nDTE;
//   var nDTEFix = new Date (nDTE);
//   nDTEFix;
//
//   //
//
//   var gfyHard = nDTEFix.getFullYear();
//   var gmHard = nDTEFix.getMonth() + 1;
//   var gdHard = nDTEFix.getDate() ;
//
//   function dayTimeFixHard () {
//
//     var check = gdHard-10;
//
//     if (check < 0){
//       return "0"+gdHard
//     }
//     else{
//       return gdHard
//     }
//   }
//
//
//   var gdFixHard = dayTimeFixHard();
//   gdFixHard;
//
//
//   function monthTimeFixHard () {
//
//     var check = gmHard-10;
//
//     if (check < 0){
//       return "0"+gmHard
//     }
//     else{
//       return gmHard
//     }
//   }
//
//   var gmFixHard = monthTimeFixHard();
//   gmFixHard;
//
//   var nowDefaultFixHard = gfyHard+"-"+gmFixHard+"-"+gdFixHard ;
//   nowDefaultFixHard;
//
//   var pushCurrentTimeHard = document.getElementById("expirationDate").value = nowDefaultFixHard ;
//   pushCurrentTimeHard;
//
// }


/////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////

function pushDaysToExDiv1Calc () {

  var expirDate1 = document.getElementById("exDiv1Date").value;
  expirDate1Time = new Date (expirDate1);
  expirDate1Time;

  var expirDate1TimeMili = expirDate1Time.getTime();

  var daysToExpirMili = expirDate1TimeMili - currentTimeMili;
  daysToExpirMili;

  var millisecondsPerDay = 24 * 60 * 60 * 1000 ;

  var daysToExpirCurrent = daysToExpirMili / millisecondsPerDay ;
  daysToExpirCurrent;

  //////

  var expir1GFY = expirDate1Time.getFullYear();
  expir1GFY;
  var expir1GM = expirDate1Time.getMonth();
  expir1GM;
  var expir1GD = expirDate1Time.getDate() + 1;
  expir1GD;
  var expirDate1Fix = new Date (expir1GFY, expir1GM, expir1GD, 15, 0, 0, 0 )
  expirDate1Fix;
  var expirDate1FixTimeMili = expirDate1Fix.getTime();
  expirDate1FixTimeMili;
  var daysToExpirMiliFix = expirDate1FixTimeMili - currentTimeMili;
  daysToExpirMiliFix;

  var millisecondsPerDay = 24 * 60 * 60 * 1000 ;

  var daysToExpir1CurrentFix = daysToExpirMiliFix / millisecondsPerDay ;
  daysToExpir1CurrentFix;

  var pushDaysToExpir1 = document.getElementById("daysToExDiv1").value = daysToExpir1CurrentFix.toFixed(2) * 1;
  pushDaysToExpir1;

}

///////////////////////////////////////////////////////////////////////////////////////

function pushDaysToExDiv2Calc () {

  var expirDate1 = document.getElementById("exDiv2Date").value;
  expirDate1Time = new Date (expirDate1);
  expirDate1Time;

  var expirDate1TimeMili = expirDate1Time.getTime();

  var daysToExpirMili = expirDate1TimeMili - currentTimeMili;
  daysToExpirMili;

  var millisecondsPerDay = 24 * 60 * 60 * 1000 ;

  var daysToExpirCurrent = daysToExpirMili / millisecondsPerDay ;
  daysToExpirCurrent;

  //////

  var expir1GFY = expirDate1Time.getFullYear();
  expir1GFY;
  var expir1GM = expirDate1Time.getMonth();
  expir1GM;
  var expir1GD = expirDate1Time.getDate() + 1;
  expir1GD;
  var expirDate1Fix = new Date (expir1GFY, expir1GM, expir1GD, 15, 0, 0, 0 )
  expirDate1Fix;
  var expirDate1FixTimeMili = expirDate1Fix.getTime();
  expirDate1FixTimeMili;
  var daysToExpirMiliFix = expirDate1FixTimeMili - currentTimeMili;
  daysToExpirMiliFix;

  var millisecondsPerDay = 24 * 60 * 60 * 1000 ;

  var daysToExpir1CurrentFix = daysToExpirMiliFix / millisecondsPerDay ;
  daysToExpir1CurrentFix;

  var pushDaysToExpir1 = document.getElementById("daysToExDiv2").value = daysToExpir1CurrentFix.toFixed(2) * 1;
  pushDaysToExpir1;

}

//////////////////////////////////////////////////////////////////////////////////////

function pushDaysToExDiv3Calc () {

  var expirDate1 = document.getElementById("exDiv3Date").value;
  expirDate1Time = new Date (expirDate1);
  expirDate1Time;

  var expirDate1TimeMili = expirDate1Time.getTime();

  var daysToExpirMili = expirDate1TimeMili - currentTimeMili;
  daysToExpirMili;

  var millisecondsPerDay = 24 * 60 * 60 * 1000 ;

  var daysToExpirCurrent = daysToExpirMili / millisecondsPerDay ;
  daysToExpirCurrent;

  //////

  var expir1GFY = expirDate1Time.getFullYear();
  expir1GFY;
  var expir1GM = expirDate1Time.getMonth();
  expir1GM;
  var expir1GD = expirDate1Time.getDate() + 1;
  expir1GD;
  var expirDate1Fix = new Date (expir1GFY, expir1GM, expir1GD, 15, 0, 0, 0 )
  expirDate1Fix;
  var expirDate1FixTimeMili = expirDate1Fix.getTime();
  expirDate1FixTimeMili;
  var daysToExpirMiliFix = expirDate1FixTimeMili - currentTimeMili;
  daysToExpirMiliFix;

  var millisecondsPerDay = 24 * 60 * 60 * 1000 ;

  var daysToExpir1CurrentFix = daysToExpirMiliFix / millisecondsPerDay ;
  daysToExpir1CurrentFix;

  var pushDaysToExpir1 = document.getElementById("daysToExDiv3").value = daysToExpir1CurrentFix.toFixed(2) * 1;
  pushDaysToExpir1;

}

//////////////////////////////////////////////////////////////////////////////////////

function pushDaysToExDiv4Calc () {

  var expirDate1 = document.getElementById("exDiv4Date").value;
  expirDate1Time = new Date (expirDate1);
  expirDate1Time;

  var expirDate1TimeMili = expirDate1Time.getTime();

  var daysToExpirMili = expirDate1TimeMili - currentTimeMili;
  daysToExpirMili;

  var millisecondsPerDay = 24 * 60 * 60 * 1000 ;

  var daysToExpirCurrent = daysToExpirMili / millisecondsPerDay ;
  daysToExpirCurrent;

  //////

  var expir1GFY = expirDate1Time.getFullYear();
  expir1GFY;
  var expir1GM = expirDate1Time.getMonth();
  expir1GM;
  var expir1GD = expirDate1Time.getDate() + 1;
  expir1GD;
  var expirDate1Fix = new Date (expir1GFY, expir1GM, expir1GD, 15, 0, 0, 0 )
  expirDate1Fix;
  var expirDate1FixTimeMili = expirDate1Fix.getTime();
  expirDate1FixTimeMili;
  var daysToExpirMiliFix = expirDate1FixTimeMili - currentTimeMili;
  daysToExpirMiliFix;

  var millisecondsPerDay = 24 * 60 * 60 * 1000 ;

  var daysToExpir1CurrentFix = daysToExpirMiliFix / millisecondsPerDay ;
  daysToExpir1CurrentFix;

  var pushDaysToExpir1 = document.getElementById("daysToExDiv4").value = daysToExpir1CurrentFix.toFixed(2) * 1;
  pushDaysToExpir1;

}

//////////////////////////////////////////////////////////////////////////////////////



function goCalc () {

var wTicker = document.getElementById("ticker").value;
var wStockPx = document.getElementById("stockPx").value;
var wStrikePx = document.getElementById("strikePx").value;
var wVol = document.getElementById("vol").value;
//var wDaysToExpir = document.getElementById("daysToExpir").value;
var wDaysToExpir = document.getElementById("dte").value;
var wRate = document.getElementById("rate").value;
var wNumberOfBranches = document.getElementById("numberOfBranches").value;
var wDiv1 = document.getElementById("div1").value;
var wExDiv1Date = document.getElementById("daysToExDiv1").value;
var wDiv2 = document.getElementById("div2").value;
var wExDiv2Date = document.getElementById("exDiv2Date").value;
var wDiv3 = document.getElementById("div3").value;
var wExDiv3Date = document.getElementById("exDiv3Date").value;
var wDiv4 = document.getElementById("div4").value;
var wExDiv4Date = document.getElementById("exDiv4Date").value;






//START BINOMIAL

//////////////CLEAN STOCK PRICES //////////
////first creates an up_node list (highest price for each branch)//////
//need to make divsPerBranchList, exDivStockPxPerBranch, then current method to creat new up_node list with divs///

var currStockPx = wStockPx * 1;

var strike = wStrikePx * 1;
var daysToExpir = wDaysToExpir * 1;
var bbranches = wNumberOfBranches * 1;
var daysPerBranch = daysToExpir / bbranches;

var e = 2.718281828459045 ;

var vol = (wVol / 100) * 1 ;
var time = (daysToExpir / 365)  ;
var timePerBranch = (time / bbranches) ;
var u = e**( vol * ((time/bbranches)**0.5) );
var d = 1 / u ;
var r = (wRate / 100) * 1 ;
var rr = e**( r * timePerBranch) ;
var p = (rr-d)/(u-d) ;

var pvFactor = e**( r * timePerBranch * (-1) ) ;







var div1 = wDiv1 * 1;
var daysToDiv1Ex = wExDiv1Date * 1;
var divBranch1 = daysToDiv1Ex / daysPerBranch;
var cleanDivBranch1 = Math.ceil(divBranch1);

var div2 = wDiv2 * 1;
var daysToDiv2Ex = wExDiv2Date * 1;
var divBranch2 = daysToDiv2Ex / daysPerBranch;
var cleanDivBranch2 = Math.ceil(divBranch2);

var div3 = wDiv3 * 1;
var daysToDiv3Ex = wExDiv3Date * 1;
var divBranch3 = daysToDiv3Ex / daysPerBranch;
var cleanDivBranch3 = Math.ceil(divBranch3);

var div4 = wDiv4 * 1;
var daysToDiv4Ex = wExDiv4Date * 1;
var divBranch4 = daysToDiv4Ex / daysPerBranch;
var cleanDivBranch4 = Math.ceil(divBranch4);

var div5 = 0;
var daysToDiv5Ex = 300;
var divBranch5 = daysToDiv5Ex / daysPerBranch;
var cleanDivBranch5 = Math.ceil(divBranch5);

var div6 = 0;
var daysToDiv6Ex = 300;
var divBranch6 = daysToDiv6Ex / daysPerBranch;
var cleanDivBranch6 = Math.ceil(divBranch6);

var div7 = 0;
var daysToDiv7Ex = 542;
var divBranch7 = daysToDiv7Ex / daysPerBranch;
var cleanDivBranch7 = Math.ceil(divBranch7);

var div8 = 0;
var daysToDiv8Ex = 632;
var divBranch8 = daysToDiv8Ex / daysPerBranch;
var cleanDivBranch8 = Math.ceil(divBranch8);


var divInfo = [[1, cleanDivBranch1, div1],[2, cleanDivBranch2, div2],[3, cleanDivBranch3, div3],[4, cleanDivBranch4, div4],[5, cleanDivBranch5, div5],[6, cleanDivBranch6, div6],[7, cleanDivBranch7, div7],[8, cleanDivBranch8, div8]];

/////////////////////////////////////////////

// assembles list of when the branch starts in terms of days from now....now being day zero, or you could say time zero
// the number of items equals the number of branches.
// good to use to diplay below the branches and nodes on the website display

function siteDataForDaysFromNowForEachBranchStart (){

  var count = 0;
  var iter = 0;
  var startDay = [];

  while (count <= bbranches){

    var sd = daysPerBranch * count ;
    var cleanStartDay =  sd.toFixed(2) * 1 ;
    startDay.push( cleanStartDay);
    count = count + 1;

  }

  return startDay

}

var siteDataForDaysFromNowForEachBranchStartList = siteDataForDaysFromNowForEachBranchStart ();
siteDataForDaysFromNowForEachBranchStartList;

/////////////////////////////////////////////

// assembles the branch start days from now (now being day zero) for each nodes
// this can be zipped to super_list or uber_list


function daysFromNowForEachBranchEnd (){

  var count = 0;
  var iter = 0;
  var startDay = [];


  while (count <= bbranches){

    while ( iter <= count ){

      var sd = daysPerBranch * count ;
      var cleanStartDay =  sd.toFixed(2) * 1 ;
      startDay.push( cleanStartDay);
      iter = iter + 1;

    }

    iter = 0;
    count = count + 1;

  }

  return startDay

}

var dayBranchEndsOn = daysFromNowForEachBranchEnd ();
dayBranchEndsOn;


/////////////////////////////////////////////////////////////////////////cleans zero branch div to 1

function cleanDivInfoZeroBranchFilter (){
  var count = 0;
   var iter = 0;
  var cleanDivInfoZeroBranchFilterList = [];
  var divInfoLength = divInfo.length;

  while (count<=(divInfoLength-1)){
    if (divInfo[count][1]===0){
      cleanDivInfoZeroBranchFilterList.push([1,divInfo[count][2]]);
    }
    else{
      cleanDivInfoZeroBranchFilterList.push([divInfo[count][1],divInfo[count][2]]);
    }

    count = count + 1 ;

  }
  return cleanDivInfoZeroBranchFilterList
}

var cleanDivInfoNoZeroBranchDivList = cleanDivInfoZeroBranchFilter();

///////////////////////////////////////////////////////////////////////


function cleanDivInfoThird (){
  var count = 0;
  var iter = 0;
  var cleanDivInfoList = [];
  var divInfoLength = divInfo.length;

  while (count<divInfoLength){

    if (count === (divInfoLength -1) ){
      cleanDivInfoList.push([cleanDivInfoNoZeroBranchDivList[count][0],cleanDivInfoNoZeroBranchDivList[count][1]])
      count = count + 1
      // this statement fixes range prob on last div

    }



    else if ( (cleanDivInfoNoZeroBranchDivList[count][0]) === (cleanDivInfoNoZeroBranchDivList[count+1][0]) ) {

      var divX = (cleanDivInfoNoZeroBranchDivList[count][1] + cleanDivInfoNoZeroBranchDivList[count+1][1]);
      //on last div in list..this statement has a prob bc it goes out of range..so first statement was added

      cleanDivInfoList.push([cleanDivInfoNoZeroBranchDivList[count][0],divX]);

      count = count + 2

    }
    else{
      cleanDivInfoList.push([cleanDivInfoNoZeroBranchDivList[count][0],cleanDivInfoNoZeroBranchDivList[count][1]]);
      count = count + 1;
    }


  }



  return cleanDivInfoList

}

var cleanDivInfoThirdFilter = cleanDivInfoThird();



/////////////////////////////////////////////////////////////


function cleanDivInfoFour (){
  var count = 0;
  var iter = 0;
  var cleanDivInfoList = [];
  var divInfoLength = cleanDivInfoThirdFilter.length;

  while (count<divInfoLength){

    if (count === (divInfoLength -1) ){
      cleanDivInfoList.push([cleanDivInfoThirdFilter[count][0],cleanDivInfoThirdFilter[count][1]])
      count = count + 1

    }



    else if ( (cleanDivInfoThirdFilter[count][0]) === (cleanDivInfoThirdFilter[count+1][0]) ) {

      var divX = (cleanDivInfoThirdFilter[count][1] + cleanDivInfoThirdFilter[count+1][1]);

      cleanDivInfoList.push([cleanDivInfoThirdFilter[count][0],divX]);

      count = count + 2

    }
    else{
      cleanDivInfoList.push([cleanDivInfoThirdFilter[count][0],cleanDivInfoThirdFilter[count][1]]);
      count = count + 1;
    }


  }



  return cleanDivInfoList

}

var cleanDivInfoFourFilter = cleanDivInfoFour();



/////////////////////////////////////////////////////////////

function cleanDivInfoFive (){
  var count = 0;
  var iter = 0;
  var cleanDivInfoList = [];
  var divInfoLength = cleanDivInfoFourFilter.length;

  while (count<divInfoLength){

    if (count === (divInfoLength -1) ){
      cleanDivInfoList.push([cleanDivInfoFourFilter[count][0],cleanDivInfoFourFilter[count][1]])
      count = count + 1

    }



    else if ( (cleanDivInfoFourFilter[count][0]) === (cleanDivInfoFourFilter[count+1][0]) ) {

      var divX = (cleanDivInfoFourFilter[count][1] + cleanDivInfoFourFilter[count+1][1]);

      cleanDivInfoList.push([cleanDivInfoFourFilter[count][0],divX]);

      count = count + 2

    }
    else{
      cleanDivInfoList.push([cleanDivInfoFourFilter[count][0],cleanDivInfoFourFilter[count][1]]);
      count = count + 1;
    }


  }



  return cleanDivInfoList

}

var cleanDivInfoFiveFilter = cleanDivInfoFive();




//////////////////////////////////////////////////////////////


function scrubDivInfo () {

  cleanDivInfoNoZeroBranchDivList;
  cleanDivInfoThirdFilter;
  cleanDivInfoFourFilter;
  cleanDivInfoFiveFilter;

  return cleanDivInfoFiveFilter



}

var scrubbedDivList = scrubDivInfo();
scrubbedDivList;

/// !!!!!!!!!!!! more divs can be added..just need to add more filters...scrubNumber function will tell you how many filter you need...
/// !!!!!!!!!!!!  3-4 divs or less needs 2 filters, 5-8 divs needs 3 filters, 9-16 needs 4 filters, 17-32 needs 5 filters, 33-64 needs 6..
/// !!!!!!!!!!!!  it's filters needed is:   (Amount of Divs) / (2**Filters) , if there is a remainder then incread amount of filters by 1.

//////////////////////////////////////////////////////////////

function scrubNumber () {

  var count = 0;
  var iter = 0;
  var divInfoLength = divInfo.length;

  while ((2**count) < divInfoLength) {

    count = count + 1;
  }
  return count

}

var numberOfScrubs = scrubNumber()

/////////////////////////////////////////////////////////////


function divBones () {
  var count = 1;
  var divBonesList = [];

  while (count <= bbranches){
    divBonesList.push([count,0])
    count = count + 1;
  }
  return divBonesList
}

var divyBones = divBones()

divyBones;

/////////////////////////////////////////////////////////


function scrubbedDivListFinal () {
  var count = 0;
  var iter = scrubbedDivList.length;
  var scrubbedFinalList = [];

  while (count < (iter-1)) {

    if (scrubbedDivList[count][0] <= bbranches){

      scrubbedFinalList.push(scrubbedDivList[count]);

    }
    count = count + 1;
  }

  return scrubbedFinalList

}

var finalDivScrub = scrubbedDivListFinal ()

finalDivScrub;


////////////////////////////////////////////////////////

function divBranchInfo () {

  var count = 0;
  var iter = 0;
  var divBranchList = [];
  var maxIter = (finalDivScrub.length - 1)


  if (finalDivScrub.length === 0){
    divBranchList = divyBones;
  }
  else{

    while (count < (bbranches)){

      if (divyBones[count][0] === finalDivScrub[iter][0]){
        divBranchList.push(finalDivScrub[iter]);
        count = count +1;
        if (iter < maxIter) {
          iter = iter + 1;}

      }
      else{
        divBranchList.push(divyBones[count]);
        count = count + 1;
      }
    }

  }



  return divBranchList

}

var finalDivBranchList = divBranchInfo ();
finalDivBranchList;


/////////////////////////////////////////////////////////


function cumlaDiv (){
  var count = 0;
  var cumlative = 0;
  var iter = finalDivBranchList.length;
  var cumlaDivList = [];

  while (count < iter) {
    cumlative = cumlative + finalDivBranchList[count][1];
    cumlaDivList.push(cumlative);
    count = count + 1;

  }
  return cumlaDivList
}

var cumlativeDivPerBranch = cumlaDiv();
cumlativeDivPerBranch;


///////////////////////////////////////////////////////

function stockPxPerBranch () {
  var count = 0;
  var iter = cumlativeDivPerBranch.length;
  var stockPxExDiv = [currStockPx]

  while (count < iter) {

    stockPxExDiv.push(currStockPx - cumlativeDivPerBranch[count]);
    count = count + 1;

  }

  return stockPxExDiv

}

var stockPxExDivPerBranch = stockPxPerBranch ();
stockPxExDivPerBranch;

///////////////////////////////////////////////////////////////////

// takes the finalDivBranchList (which does not include div info on Zero Branch bc there cannot be an ex-div on the zero branch) and
// creates the div branch info for the nodes of each branch.....example: on the 5th Branch there will be 6 nodes.....
// what ever the div is on the 5th Branch (could be zero) it will create 6 items of the same number (the number being the div on that branch)
// can be zipped to super_list and uber_list


function divInfoForNode (){

  var count = 1;
  var iter = 0;
  var divNode = [0];


  while (count <= bbranches) {


    while (iter <= count){

      divNode.push(finalDivBranchList[count-1][1]) ;

      iter = iter + 1;

    }

    iter = 0;
    count = count + 1;

  }
  return divNode

}

var divBranchInfoForNode = divInfoForNode ();
divBranchInfoForNode;


////////////////////////////////////////////////////////////////

// takes the exDivStockPxPerBranch list (which includes the current stock px on branch zero)(there cannot be a ex-div or ex-div stock px
// on branch zero)....and makes an ex-div stock px for each node on that branch
// can be zipped to super_list and uber_list


function exDivStockPxforNode (){

  var count = 0;
  var iter = 0;
  var exDivNode = [];

  while (count <= bbranches){

    while (iter <= count){

      exDivNode.push( stockPxExDivPerBranch [count] );

      iter = iter + 1;
    }

    iter = 0;
    count = count + 1;
  }

  return exDivNode

}

var exDivStockPxPerBranchForNode = exDivStockPxforNode ();
exDivStockPxPerBranchForNode;



////////////////////////////////////////////////////////////////////

/// up nodes ////////

function up_node(){
  var last_up_px = bbranches;
  var exponent = 0;
  var iter = 0;
  var count = 0;
  var up_move = u;
  var up_list = [];

  while (iter <= last_up_px){
    up_list.push(stockPxExDivPerBranch[count]*(up_move**iter))
    count = count + 1
    iter = iter + 1 ;
  }

  return up_list

}

var up_node_pxs = up_node()

up_node_pxs;



/////builds rest of the nodes of each branch based on highest node//////
function all_stock_pxs (){

  var last_up_px = bbranches;
  var exponent = 0;
  var iter = 0;
  var count = 0;
  var up_move = u;
  var down_move = (1 / up_move);
  var node_down_increment = down_move / up_move
  var all_list = [];

  while (iter <= last_up_px){

    while (exponent <= iter){
      all_list.push(up_node_pxs[iter]*(node_down_increment**exponent));
      exponent = exponent + 1;
    }

    iter = iter + 1;
    exponent = 0;

  }

  return all_list

}


var raw_all_stock_pxs = all_stock_pxs();

raw_all_stock_pxs;


////rounds all the stock pxs at each node to two decmils///////

function clean_raw_all_stock_pxs (){

  var clean_all_stock_pxs = [];
  var count = 0;
  var clean_count = (raw_all_stock_pxs.length - 1);

  while (count <= clean_count){
    var scrub = ((raw_all_stock_pxs[count]).toFixed(8)) * 1 ;
    clean_all_stock_pxs.push(scrub);
    count = count + 1;

  }

  return clean_all_stock_pxs

}

var clean_all_stock_pxs_list = clean_raw_all_stock_pxs();
clean_all_stock_pxs_list;


//////////////////CLEAN STOCK PRICES ////////////////////


///////////////////////////  BRANCH LIST /////////////////////////////



function branchList(){

  var branch_number_list =[];
  var last_address = bbranches;
  var iter = 0;
  var count = 0;

  while(count<=last_address){
    while(iter<=last_address){
      branch_number_list.push(last_address);
      iter = iter + 1;
    }
    iter = 0;
    last_address = last_address -1;
  }


  return branch_number_list.reverse()
}

var branchListAll = branchList();
branchListAll;

///////////////////////////  BRANCH LIST /////////////////////////////



//////////////////////////// NODE LIST ///////////////////////////////

function nodeList(){

  var node_number_list =[];
  var last_address = bbranches;
  var iter = 0;
  var count = 0;

  while(count<=last_address){
    while(iter<=last_address){
      node_number_list.push(iter);
      iter = iter + 1;
    }
    iter = 0;
    last_address = last_address -1;
  }


  return node_number_list.reverse()
}

var nodeListAll = nodeList();
nodeListAll;


//////////////////////////// NODE LIST ///////////////////////////////


////////// ZIP UP ///////////////

function zip_up (x,y,z){
  var iter1 = x.length - 1;
  child1 = []
  parent1 = []
  count = 0

  while (count <= iter1){

    child1.push(x[count])
    child1.push(y[count])
    child1.push(z[count])

    parent1.push(child1)
    child1 = []
    count = count + 1

  }

  return parent1

}

//////////////// ZIP UP ////////////////


var pxs = clean_all_stock_pxs_list;  ///// line 714 to 884 ////

var nL = nodeList(bbranches);      //// 681 to 699  /////

var bL = branchList(bbranches);      ////// 655 to 681  ////////

var super_list = zip_up(bL,nL,pxs);          ///////// 933 to 955 /////////

super_list;


////////////////////////////////////////////////////
//Call Intrinsic Value List

function callIntrinsicValueAtEachNode () {

    var count = 0;
    var iter = 0;
    var callIntrinsic = [];

    while (count < super_list.length){
        var callIntrinsicValue = ( super_list[count][2] - strike );
        var cleanCallIntrinsicValue = callIntrinsicValue.toFixed(8) * 1;
        if (cleanCallIntrinsicValue > 0){
            callIntrinsic.push( cleanCallIntrinsicValue );
            count = count + 1;
        }
        else{
            callIntrinsic.push(0);
            count = count + 1;
        }


    }
    return callIntrinsic
}

var callIntrinsicAtEachNodeList = callIntrinsicValueAtEachNode () ;
callIntrinsicAtEachNodeList;
// this can be zipped to super_list bc its the same sequence

/////////////////////////////////////////////////////

function backwardInductionCallIntrinsicSequence () {

  var count = bbranches;
  var iter = bbranches;
  var place = bbranches + 1;
  var callIntrinsicBackwardInductionSequence = [];
  var num = callIntrinsicAtEachNodeList.length;

  while (count >= 0 ){

    while (iter >= 0 ){
      callIntrinsicBackwardInductionSequence.push(callIntrinsicAtEachNodeList[num-place]);
      iter = iter -1 ;
      place = place -1 ;

    }
    place = bbranches + 1;
    num = num - count;
    count = count -1 ;
    iter = count;


  }


  return callIntrinsicBackwardInductionSequence

}

var callIntrinsicBackwardInductionSequenceList = backwardInductionCallIntrinsicSequence () ;
callIntrinsicBackwardInductionSequenceList;

//the can be zipped to callValueAtEachNodeMaster which might be renamed to euroCallValueAtEachNode

////////////////////////////////////////////////////


// gets call payouts on final nodes


// isolates the index numbers of the final nodes on super_list

function amountOfNodes(branchNumber) {

    var nodes = (branchNumber + 2) * ((branchNumber +1) / 2);

    return nodes
}

var totalNodes = amountOfNodes(bbranches);
totalNodes;

var totalNodesSecondToLastBranch = amountOfNodes(bbranches -1);
totalNodesSecondToLastBranch;

var totalNodesThirdToLastBranch = amountOfNodes(bbranches -2);
totalNodesThirdToLastBranch;


//


function callFinalNodePayOuts () {

    var count = 0;
    var iter = totalNodesSecondToLastBranch;
    var callFinalPayOutList = [];


    while (count <= bbranches){
        var callPayOut = super_list[iter][2] - strike ;
        var cleanCallPayOut = callPayOut.toFixed(8) * 1;
        if (cleanCallPayOut > 0){
            callFinalPayOutList.push(cleanCallPayOut);
            iter = iter + 1;
        }
        else{
            callFinalPayOutList.push(0);
            iter = iter + 1;
        }
        count = count + 1;
    }
    return callFinalPayOutList
}

var callFinalBranchPayOutList = callFinalNodePayOuts ();
callFinalBranchPayOutList;

////////////////////////////////////////////////////////////////////////
// creates an index list to make call values using p on up nodes and 1-p on down nodes from thirdToLastBranch to zero branch
// using backward induction.  dont need it for terminal branch and secondToLastBranch

function mapPath () {

  var count = 0;
  var iter = 0;
  var gen = totalNodesThirdToLastBranch;
  var seq = (bbranches - 2) ;
  var mapList = [];
  var mapNum = 0;

  while (seq >= 0) {

    while (iter <= seq) {
      mapList.push(mapNum);
      if (iter < seq) {
        mapNum = mapNum + 1;
      }
      else{
        mapNum = mapNum + 2;
      }

      iter = iter + 1;
    }

    iter = 0;
    seq = seq -1;

  }

  return mapList

}

var parentList = mapPath () ;
parentList;


///////////////////////////////////////////////////////////////////////



function callValueNonTerminalNodes3 (){

    var count = 0;
    var iter  = 0;
    var callValueAtNode = []

    while (count < bbranches){
      var cVal = pvFactor * ( (p * callFinalBranchPayOutList[count]) + ( (1-p) * callFinalBranchPayOutList[count+1] ) ) ;
      var cleanCVal = ( cVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCVal ) ;

      count = count + 1;

    }

    while (iter < totalNodesThirdToLastBranch){

      var callVal = pvFactor * ( (p * callValueAtNode[parentList[iter]]) + ( (1-p) * callValueAtNode[parentList[iter]+1] ) );
      var cleanCallVal = ( callVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCallVal ) ;

      iter = iter + 1;


    }

    return callValueAtNode

}

var callValueAtEachNodeList3 = callValueNonTerminalNodes3 () ;
callValueAtEachNodeList3;








///////////////////////////////////////////////////////////////////////
//this combines callFinalBranchPayOutList with callValueAtEachNodeList3 to make euroCallValueAtEachNodeMaster
// last value in euroCallValueAtEachNodeMaster is euroCallValue

function callNodeMaster () {

  var count = 0;
  var iter = 0;
  var callNodeMasterList = [];
  var finalBranchLength = callFinalBranchPayOutList.length;
  var nonFinalBranchLength = callValueAtEachNodeList3.length;

  while (count < finalBranchLength){
    callNodeMasterList.push(callFinalBranchPayOutList[count]);
    count = count + 1
  }

  while (iter < nonFinalBranchLength) {
    callNodeMasterList.push(callValueAtEachNodeList3[iter]);
    iter = iter + 1;
  }

  return callNodeMasterList
}

var euroCallValueAtEachNodeMaster = callNodeMaster();
euroCallValueAtEachNodeMaster;

var euroCallValue = euroCallValueAtEachNodeMaster[euroCallValueAtEachNodeMaster.length-1];
euroCallValue;


/////////////////////////////////////////////////////////////////

// assembles euroCallValueAtEachNodeMaster into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// the first item of the resulting array is also the euro call value:  euroCallAtEachNodeListInSuperListSequence[0]
// this can be zipped to super_list


function reverseEuroCallBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = euroCallValueAtEachNodeMaster.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(euroCallValueAtEachNodeMaster[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var euroCallAtEachNodeListInSuperListSequence = reverseEuroCallBackwardInductionSequence ();
euroCallAtEachNodeListInSuperListSequence;



////////////////////////////////////////////////////////////////////////////
//  this creates a list of the call intrinsic value for all non-terminal nodes in the backward induction sequence
//  this can be compared to callValueAtEachNodeList3 to make a list for American Call Value using backward induction

function callIntrinsicBackwardInductionSequenceList_NonTerminalNodes () {

  var count = 0;
  var iter = 0;
  var callIntrinsicBackwardInductionNonTerminalList = []
  var num = callIntrinsicBackwardInductionSequenceList.length - (bbranches + 1 ) ;
  var indexIter = callIntrinsicBackwardInductionSequenceList.length - totalNodesSecondToLastBranch ;

  while (count < num){

    callIntrinsicBackwardInductionNonTerminalList.push( callIntrinsicBackwardInductionSequenceList[indexIter] );
    indexIter = indexIter + 1;
    count = count + 1;

  }
  return callIntrinsicBackwardInductionNonTerminalList
}

var callIntrinsicAtEachNodeBackwardInductionNonTerminalList = callIntrinsicBackwardInductionSequenceList_NonTerminalNodes ();
callIntrinsicAtEachNodeBackwardInductionNonTerminalList;

var callIntrinsicSecondToLastBranchNodesBackward_Slice = callIntrinsicAtEachNodeBackwardInductionNonTerminalList.slice(0,(bbranches));
callIntrinsicSecondToLastBranchNodesBackward_Slice;

var callIntrinsic_After_SecondToLastBranchNodesBackward_Slice = callIntrinsicAtEachNodeBackwardInductionNonTerminalList.slice((bbranches),(callIntrinsicAtEachNodeBackwardInductionNonTerminalList.length) );
callIntrinsic_After_SecondToLastBranchNodesBackward_Slice;


////////////////////////////////////////////////////////////////////////////
// if intrinsic value of call is higher than euro call value on a particular node, then intrinsic value replaces euro value
// on that particular node

function americanCallBackwardInduction (){

    var count = 0;
    var iter  = 0;
    var callValueAtNode = [];


    while (count < bbranches){
      var cIntVal = callIntrinsicSecondToLastBranchNodesBackward_Slice[count];
      var cEuroVal = pvFactor * ( (p * callFinalBranchPayOutList[count]) + ( (1-p) * callFinalBranchPayOutList[count+1] ) ) ;


      if(cIntVal > cEuroVal){
        var cVal = cIntVal;

      }
      else{
        var cVal = cEuroVal;

      }


      var cleanCVal = ( cVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCVal ) ;

      count = count + 1;

    }





    while (iter < totalNodesThirdToLastBranch){

      var callIntVal = callIntrinsic_After_SecondToLastBranchNodesBackward_Slice[iter];

      var callEuroVal = pvFactor * ( (p * callValueAtNode[parentList[iter]]) + ( (1-p) * callValueAtNode[parentList[iter]+1] ) );


      if(callIntVal > callEuroVal){
        var callVal = callIntVal;
      }
      else{
        var callVal = callEuroVal;
      }


      var cleanCallVal = ( callVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCallVal ) ;

      iter = iter + 1;


    }

    return callValueAtNode

}

var americanCallValueAtEachNonTerminalNode = americanCallBackwardInduction () ;
americanCallValueAtEachNonTerminalNode;

///////////////////////////////////////////
// assembles the full list of american call value on each node by combining callFinalBranchPayOutList with americanCallValueAtEachNonTerminalNode
// last item on the list americanCallAtEachNodeList is the americanCallValue

function americanCallValueAtEachNode (){

  var count = 0;
  var iter = 0;
  var americanCallValList = []

  while (count <= bbranches){

    americanCallValList.push(callFinalBranchPayOutList[count]);
    count = count + 1;

  }

  while (iter < totalNodesSecondToLastBranch){

    americanCallValList.push(americanCallValueAtEachNonTerminalNode[iter]);
    iter = iter + 1;

  }

  return americanCallValList

}

var americanCallAtEachNodeList = americanCallValueAtEachNode () ;
americanCallAtEachNodeList;

var americanCallValue = americanCallAtEachNodeList[americanCallAtEachNodeList.length-1];
americanCallValue;




////////////////////////////////////////////////////////////////////////////

//#11

// assembles americanCallAtEachNodeList into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// the first item of the resulting array is also the american put value:  americanCallAtEachNodeListInSuperListSequence[0]
// this can be zipped to super_list



function reverseCallBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = americanCallAtEachNodeList.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(americanCallAtEachNodeList[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var americanCallAtEachNodeListInSuperListSequence = reverseCallBackwardInductionSequence ();
americanCallAtEachNodeListInSuperListSequence;


//////////////////////////////////////////////////////////////////////////////////////////

//#12
// if intrinsic value of call is higher than euro call value on a particular node, then "yes" is returned
// if it is the nodes on the final branch then "N/A" is returned bc this is the final payout (euro and american values are derived from the final payouts)
// therefore there is nothing to compare on the final branch
// this is in backward induction sequence

function callIntrinsicGreaterThanEuro (){

    var count = 0;
    var iter  = 0;
    var place = 0;
    var callValueAtNode = [];
    var intrinsicGreater = [];


    while (place <= bbranches){
      intrinsicGreater.push("N/A")
      place = place + 1;
    }



    while (count < bbranches){
      var cIntVal = callIntrinsicSecondToLastBranchNodesBackward_Slice[count];
      var cEuroVal = (p * callFinalBranchPayOutList[count]) + ( (1-p) * callFinalBranchPayOutList[count+1] ) ;


      if(cIntVal > cEuroVal){
        var cVal = cIntVal;
        intrinsicGreater.push("yes");

      }
      else{
        var cVal = cEuroVal;
        intrinsicGreater.push("no");

      }


      var cleanCVal = ( cVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCVal ) ;

      count = count + 1;

    }





    while (iter < totalNodesThirdToLastBranch){

      var callIntVal = callIntrinsic_After_SecondToLastBranchNodesBackward_Slice[iter];

      var callEuroVal = (p * callValueAtNode[parentList[iter]]) + ( (1-p) * callValueAtNode[parentList[iter]+1] );


      if(callIntVal > callEuroVal){
        var callVal = callIntVal;
        intrinsicGreater.push("yes");
      }
      else{
        var callVal = callEuroVal;
        intrinsicGreater.push("no");
      }


      var cleanCallVal = ( callVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCallVal ) ;

      iter = iter + 1;


    }

    return intrinsicGreater

}

var callIntrinsicGreaterThanEuroYesNo = callIntrinsicGreaterThanEuro () ;
callIntrinsicGreaterThanEuroYesNo;


////////////////////////////////////////////////////////////

//#13

// assembles callIntrinsicGreaterThanEuroYesNo into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// this can be zipped to super_list



function reverseCallIntrinsicVsEuroBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = callIntrinsicGreaterThanEuroYesNo.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(callIntrinsicGreaterThanEuroYesNo[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var callIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence = reverseCallIntrinsicVsEuroBackwardInductionSequence ();
callIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence;




//end of calls

//////////////////////////////////////////////////////////////////////////////////////////






//// PUTS  (start at line 606 to start copying functions for calls and turning into puts)
////////////////////////////////////////////////////

//#1
//Put Intrinsic Value List
// this is the put intrinsic value at each node to the ex-div stock px.  starts with (0,0), (1,0), (1,1), (2,0).....to terminal nodes
//so if a branch has a div assigned to it, then the stock px will drop by the price of the div.....that is the ex-div stock px.
// ref:  (super_list: line 600), (finalDivBranchList, line 371), (cumlativeDivPerBranch, line 393), (stockPxExDivPerBranch, line 415)
// this can be zipped to super_list bc its the same sequence


function putIntrinsicValueAtEachNode () {

    var count = 0;
    var iter = 0;
    var putIntrinsic = [];

    while (count < super_list.length){
        var putIntrinsicValue = ( strike - super_list[count][2] );
        var cleanPutIntrinsicValue = putIntrinsicValue.toFixed(8) * 1;
        if (cleanPutIntrinsicValue > 0){
            putIntrinsic.push( cleanPutIntrinsicValue );
            count = count + 1;
        }
        else{
            putIntrinsic.push(0);
            count = count + 1;
        }


    }
    return putIntrinsic
}

var putIntrinsicAtEachNodeList = putIntrinsicValueAtEachNode () ;
putIntrinsicAtEachNodeList;


/////////////////////////////////////////////////////////////////////////////

//#2
// this is the put intrinsic value at each node to the ex-div stock px, but it is in the backward induction sequence
// terminal nodes start first:  (terminal,0),(terminal,1),(terminal,2).....(2,0),(2,1),(2,2),(1,0),(1,1),(0,0)
// need this format to work backwards to the american value
//the can be zipped to euroPutValueAtEachNodeMaster, line ??.  The last item in euroPutValueAtEachNodeMaster is the euro put value.
//euroPutValueAtEachNodeMaster is in the backward induction sequence.


function backwardInductionPutIntrinsicSequence () {

  var count = bbranches;
  var iter = bbranches;
  var place = bbranches + 1;
  var putIntrinsicBackwardInductionSequence = [];
  var num = putIntrinsicAtEachNodeList.length;

  while (count >= 0 ){

    while (iter >= 0 ){
      putIntrinsicBackwardInductionSequence.push(putIntrinsicAtEachNodeList[num-place]);
      iter = iter -1 ;
      place = place -1 ;

    }
    place = bbranches + 1;
    num = num - count;
    count = count -1 ;
    iter = count;


  }


  return putIntrinsicBackwardInductionSequence

}

var putIntrinsicBackwardInductionSequenceList = backwardInductionPutIntrinsicSequence () ;
putIntrinsicBackwardInductionSequenceList;



////////////////////////////////////////////////////

//#3

// gets put payouts on final nodes


// isolates the index numbers of the final nodes on super_list to get the put payouts at the terminal nodes
// then we can work backwards to node 0,0 for euro and american put values.

function amountOfNodes(branchNumber) {

    var nodes = (branchNumber + 2) * ((branchNumber +1) / 2);

    return nodes
}

var totalNodes = amountOfNodes(bbranches);
totalNodes;

var totalNodesSecondToLastBranch = amountOfNodes(bbranches -1);
totalNodesSecondToLastBranch;

var totalNodesThirdToLastBranch = amountOfNodes(bbranches -2);
totalNodesThirdToLastBranch;


//


function putFinalNodePayOuts () {

    var count = 0;
    var iter = totalNodesSecondToLastBranch;
    var putFinalPayOutList = [];


    while (count <= bbranches){
        var putPayOut = strike - super_list[iter][2] ;
        var cleanPutPayOut = putPayOut.toFixed(8) * 1;
        if (cleanPutPayOut > 0){
            putFinalPayOutList.push(cleanPutPayOut);
            iter = iter + 1;
        }
        else{
            putFinalPayOutList.push(0);
            iter = iter + 1;
        }
        count = count + 1;
    }
    return putFinalPayOutList
}

var putFinalBranchPayOutList = putFinalNodePayOuts ();
putFinalBranchPayOutList;

////////////////////////////////////////////////////////////////////////


//#4

// creates an index list to make put values using p on up nodes and 1-p on down nodes from thirdToLastBranch to zero branch
// using backward induction.  dont need it for terminal branch and secondToLastBranch
// backward induction starts from the terminal branch. The second to last branch is easily genertated from the terminal branch.
// after that, there is problem generating each branch.  You need a child node to reference two parent nodes on the previous branch..
// on each branch, the index numbers of the parent nodes jumps by two instead of one.  So we need to create and index map
// so that each child references the correct parent nodes.
// this is easily done in python by going to the end of a list with:  list_name[-1].
// this could have been done in JS with :  array_name[array_name.length].....however I did it the long way with a map list bc
// I wasnt thinking clearly at the time

function mapPath () {

  var count = 0;
  var iter = 0;
  var gen = totalNodesThirdToLastBranch;
  var seq = (bbranches - 2) ;
  var mapList = [];
  var mapNum = 0;

  while (seq >= 0) {

    while (iter <= seq) {
      mapList.push(mapNum);
      if (iter < seq) {
        mapNum = mapNum + 1;
      }
      else{
        mapNum = mapNum + 2;
      }

      iter = iter + 1;
    }

    iter = 0;
    seq = seq -1;

  }

  return mapList

}

var parentList = mapPath () ;
parentList;


///////////////////////////////////////////////////////////////////////

//#5
// this will create the euro put value for each non-terminal node (second to last node to the 0,0 node)
// this is in the backward induction sequence
// fist while loop creates the second to last branch off of the terminal nodes and places the node values into an array
// within the function.  the array is putValueAtNode.
// once putValueAtNode is created, the second while loop is self replicating down to the 0,0 node.
// this is a very nice peice of code.


function putValueNonTerminalNodes3 (){

    var count = 0;
    var iter  = 0;
    var putValueAtNode = []

    while (count < bbranches){
      var pVal = pvFactor * ( (p * putFinalBranchPayOutList[count]) + ( (1-p) * putFinalBranchPayOutList[count+1] ) ) ;
      var cleanPVal = ( pVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPVal ) ;

      count = count + 1;

    }

    while (iter < totalNodesThirdToLastBranch){

      var putVal = pvFactor * ( (p * putValueAtNode[parentList[iter]]) + ( (1-p) * putValueAtNode[parentList[iter]+1] ) ) ;
      var cleanPutVal = ( putVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPutVal ) ;

      iter = iter + 1;


    }

    return putValueAtNode

}

var putValueAtEachNodeList3 = putValueNonTerminalNodes3 () ;
putValueAtEachNodeList3;


///////////////////////////////////////////////////////////////////////

//#6
//this combines putFinalBranchPayOutList with putValueAtEachNodeList3 to make euroPutValueAtEachNodeMaster
// this is in backward induction sequence
// last value in euroPutValueAtEachNodeMaster is euroPutValue

function putNodeMaster () {

  var count = 0;
  var iter = 0;
  var putNodeMasterList = [];
  var finalBranchLength = putFinalBranchPayOutList.length;
  var nonFinalBranchLength = putValueAtEachNodeList3.length;

  while (count < finalBranchLength){
    putNodeMasterList.push(putFinalBranchPayOutList[count]);
    count = count + 1
  }

  while (iter < nonFinalBranchLength) {
    putNodeMasterList.push(putValueAtEachNodeList3[iter]);
    iter = iter + 1;
  }

  return putNodeMasterList
}

var euroPutValueAtEachNodeMaster = putNodeMaster();
euroPutValueAtEachNodeMaster;

var euroPutValue = euroPutValueAtEachNodeMaster[euroPutValueAtEachNodeMaster.length-1];
euroPutValue;


//////////////////////////////////////////////////////////////////////////

//#7

// assembles euroPutValueAtEachNodeMaster into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// the first item of the resulting array is also the euro put value:  euroPutAtEachNodeListInSuperListSequence[0]
// this can be zipped to super_list


function reverseEuroPutBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = euroPutValueAtEachNodeMaster.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(euroPutValueAtEachNodeMaster[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var euroPutAtEachNodeListInSuperListSequence = reverseEuroPutBackwardInductionSequence ();
euroPutAtEachNodeListInSuperListSequence;



//////////////////////////////////////////////////////////////////////////

//#8
//  this creates a list of the put intrinsic value for all non-terminal nodes in the backward induction sequence
//  this can be compared to putValueAtEachNodeList3 to make a list for American Put Value which is in  backward induction sequence

function putIntrinsicBackwardInductionSequenceList_NonTerminalNodes () {

  var count = 0;
  var iter = 0;
  var putIntrinsicBackwardInductionNonTerminalList = []
  var num = putIntrinsicBackwardInductionSequenceList.length - (bbranches + 1 ) ;
  var indexIter = putIntrinsicBackwardInductionSequenceList.length - totalNodesSecondToLastBranch ;

  while (count < num){

    putIntrinsicBackwardInductionNonTerminalList.push( putIntrinsicBackwardInductionSequenceList[indexIter] );
    indexIter = indexIter + 1;
    count = count + 1;

  }
  return putIntrinsicBackwardInductionNonTerminalList
}

var putIntrinsicAtEachNodeBackwardInductionNonTerminalList = putIntrinsicBackwardInductionSequenceList_NonTerminalNodes ();
putIntrinsicAtEachNodeBackwardInductionNonTerminalList;

var putIntrinsicSecondToLastBranchNodesBackward_Slice = putIntrinsicAtEachNodeBackwardInductionNonTerminalList.slice(0,(bbranches));
putIntrinsicSecondToLastBranchNodesBackward_Slice;

var putIntrinsic_After_SecondToLastBranchNodesBackward_Slice = putIntrinsicAtEachNodeBackwardInductionNonTerminalList.slice((bbranches),(putIntrinsicAtEachNodeBackwardInductionNonTerminalList.length) );
putIntrinsic_After_SecondToLastBranchNodesBackward_Slice;


///////////////////////////////////////////////////////////////////////////////

//#9
// if intrinsic value of put is higher than euro put value on a particular node, then intrinsic value replaces euro value
// this is in backward induction sequence
// on that particular node

function americanPutBackwardInduction (){

    var count = 0;
    var iter  = 0;
    var putValueAtNode = [];


    while (count < bbranches){
      var pIntVal = putIntrinsicSecondToLastBranchNodesBackward_Slice[count];
      var pEuroVal = pvFactor * ( (p * putFinalBranchPayOutList[count]) + ( (1-p) * putFinalBranchPayOutList[count+1] ) ) ;


      if(pIntVal > pEuroVal){
        var pVal = pIntVal;

      }
      else{
        var pVal = pEuroVal;

      }


      var cleanPVal = ( pVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPVal ) ;

      count = count + 1;

    }





    while (iter < totalNodesThirdToLastBranch){

      var putIntVal = putIntrinsic_After_SecondToLastBranchNodesBackward_Slice[iter];

      var putEuroVal = pvFactor * ( (p * putValueAtNode[parentList[iter]]) + ( (1-p) * putValueAtNode[parentList[iter]+1] ) );


      if(putIntVal > putEuroVal){
        var putVal = putIntVal;
      }
      else{
        var putVal = putEuroVal;
      }


      var cleanPutVal = ( putVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPutVal ) ;

      iter = iter + 1;


    }

    return putValueAtNode

}

var americanPutValueAtEachNonTerminalNode = americanPutBackwardInduction () ;
americanPutValueAtEachNonTerminalNode;



///////////////////////////////////////////////////////////////////////////////

//#10

// assembles the full list of american put value on each node by combining putFinalBranchPayOutList with americanPutValueAtEachNonTerminalNode
// this is in backward induction sequence
// last item on the list americanPutAtEachNodeList is the americanPutValue

function americanPutValueAtEachNode (){

  var count = 0;
  var iter = 0;
  var americanPutValList = []

  while (count <= bbranches){

    americanPutValList.push(putFinalBranchPayOutList[count]);
    count = count + 1;

  }

  while (iter < totalNodesSecondToLastBranch){

    americanPutValList.push(americanPutValueAtEachNonTerminalNode[iter]);
    iter = iter + 1;

  }

  return americanPutValList

}

var americanPutAtEachNodeList = americanPutValueAtEachNode () ;
americanPutAtEachNodeList;

var americanPutValue = americanPutAtEachNodeList[americanPutAtEachNodeList.length-1];
americanPutValue;




///////////////////////////////////////////////////////////////////////////////

//#11

// assembles americanPutAtEachNodeList into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// the first item of the resulting array is also the american put value:  americanPutAtEachNodeListInSuperListSequence[0]
// this can be zipped to super_list



function reversePutBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = americanPutAtEachNodeList.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(americanPutAtEachNodeList[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var americanPutAtEachNodeListInSuperListSequence = reversePutBackwardInductionSequence ();
americanPutAtEachNodeListInSuperListSequence;


//////////////////////////////////////////////////////////////////////////////////////////

//#12
// if intrinsic value of put is higher than euro put value on a particular node, then "yes" is returned
// if it is the nodes on the final branch then "N/A" is returned bc this is the final payout (euro and american values are derived from the final payouts)
// therefore there is nothing to compare on the final branch
// this is in backward induction sequence

function putIntrinsicGreaterThanEuro (){

    var count = 0;
    var iter  = 0;
    var place = 0;
    var putValueAtNode = [];
    var intrinsicGreater = [];


    while (place <= bbranches){
      intrinsicGreater.push("N/A")
      place = place + 1;
    }



    while (count < bbranches){
      var pIntVal = putIntrinsicSecondToLastBranchNodesBackward_Slice[count];
      var pEuroVal = (p * putFinalBranchPayOutList[count]) + ( (1-p) * putFinalBranchPayOutList[count+1] ) ;


      if(pIntVal > pEuroVal){
        var pVal = pIntVal;
        intrinsicGreater.push("yes");

      }
      else{
        var pVal = pEuroVal;
        intrinsicGreater.push("no");

      }


      var cleanPVal = ( pVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPVal ) ;

      count = count + 1;

    }





    while (iter < totalNodesThirdToLastBranch){

      var putIntVal = putIntrinsic_After_SecondToLastBranchNodesBackward_Slice[iter];

      var putEuroVal = (p * putValueAtNode[parentList[iter]]) + ( (1-p) * putValueAtNode[parentList[iter]+1] );


      if(putIntVal > putEuroVal){
        var putVal = putIntVal;
        intrinsicGreater.push("yes");
      }
      else{
        var putVal = putEuroVal;
        intrinsicGreater.push("no");
      }


      var cleanPutVal = ( putVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPutVal ) ;

      iter = iter + 1;


    }

    return intrinsicGreater

}

var putIntrinsicGreaterThanEuroYesNo = putIntrinsicGreaterThanEuro () ;
putIntrinsicGreaterThanEuroYesNo;


//////////////////////////////////////////////////////////////////////

//#13

// assembles putIntrinsicGreaterThanEuroYesNo into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// this can be zipped to super_list



function reversePutIntrinsicVsEuroBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = putIntrinsicGreaterThanEuroYesNo.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(putIntrinsicGreaterThanEuroYesNo[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var putIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence = reversePutIntrinsicVsEuroBackwardInductionSequence ();
putIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence;


//////////////////////////////////////////////////////////////////////////////////////////



// FINAL WRAP UP OF INFO IN ARRAYS  ///
////////// ZIP UP TWO ///////////////

function zip_up5 (x,y,z,a,b,c,d,e,f,g,h,i){
  var iter1 = x.length - 1;
  child1 = []
  parent1 = []
  count = 0

  while (count <= iter1){

    child1.push(x[count])
    child1.push(y[count])
    child1.push(z[count])
    child1.push(a[count])
    child1.push(b[count])
    child1.push(c[count])
    child1.push(d[count])
    child1.push(e[count])
    child1.push(f[count])
    child1.push(g[count])
    child1.push(h[count])
    child1.push(i[count])


    parent1.push(child1)
    child1 = []
    count = count + 1

  }

  return parent1

}

//////////////// ZIP UP TWO ////////////////


var pxs = clean_all_stock_pxs_list;  ///// line 714 to 884 ////

var nL = nodeList(bbranches);      //// 681 to 699  /////

var bL = branchList(bbranches);      ////// 655 to 681  ////////

var euroCall = euroCallAtEachNodeListInSuperListSequence;

var euroPut = euroPutAtEachNodeListInSuperListSequence;

var americanCall = americanCallAtEachNodeListInSuperListSequence;

var cIntGrtEuro = callIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence;

var americanPut = americanPutAtEachNodeListInSuperListSequence;

var pIntGrtEuro = putIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence;

var divPerBranchOnEachNode = divBranchInfoForNode;      //// line 425 to 452 /////

var exDivStockPxPerBranchOnEachNode = exDivStockPxPerBranchForNode;    ///// line 462 to 486 ////

var branchEndDay = dayBranchEndsOn;      // line 79 to 104 //


var uber_list = zip_up5(bL,nL,pxs, euroCall, americanCall, cIntGrtEuro, euroPut, americanPut, pIntGrtEuro, divPerBranchOnEachNode, exDivStockPxPerBranchOnEachNode, branchEndDay );

uber_list;


//option values

//american call
function aCVOP () {
  if (daysToExpir <= 0){
    if ( (currStockPx - strike) > 0 ){
      var aCall = currStockPx - strike ;
    }
    else{
      var aCall = 0;
    }
  }
  else{
    var aCall = uber_list[0][4];
  }

  return aCall
}

var americanCallValueOutPut = aCVOP() ;
americanCallValueOutPut;

//american put
function aPVOP () {
  if (daysToExpir <= 0){
    if ( (strike - currStockPx) > 0 ){
      var aPut =  strike - currStockPx;
    }
    else{
      var aPut = 0;
    }
  }
  else{
    var aPut = uber_list[0][7];
  }

  return aPut
}

var americanPutValueOutPut = aPVOP() ;
americanPutValueOutPut;


//euro call
function eCVOP () {
  if (daysToExpir <= 0){
    if ( (currStockPx - strike) > 0 ){
      var eCall = currStockPx - strike ;
    }
    else{
      var eCall = 0;
    }
  }
  else{
    var eCall = uber_list[0][3];
  }

  return eCall
}

var euroCallValueOutPut = eCVOP() ;
euroCallValueOutPut;


//euro put
function ePVOP () {
  if (daysToExpir <= 0){
    if ( (strike - currStockPx) > 0 ){
      var ePut =  strike - currStockPx;
    }
    else{
      var ePut = 0;
    }
  }
  else{
    var ePut = uber_list[0][6];
  }

  return ePut
}

var euroPutValueOutPut = ePVOP() ;
euroPutValueOutPut;




//var americanCallValueOutPut = uber_list[0][4];
//var americanPutValueOutPut = uber_list[0][7];
//var euroCallValueOutPut = uber_list[0][3];
//var euroPutValueOutPut = uber_list[0][6];



//option deltas

// call delta
if (daysToExpir <= 0){
  if  ((currStockPx - strike) > 0 ) {
    var cDelta = 1
  }
  else{
    var cDelta = 0
  }
}
else{
  var cDelta =  ( (uber_list[1][4] - uber_list[2][4]) / (uber_list[1][2] - uber_list[2][2]) ).toFixed(2) *1 ;
}
cDelta ;


//put delta
if (daysToExpir <= 0){
  if  ((strike - currStockPx) > 0 ) {
    var pDelta = 1
  }
  else{
    var pDelta = 0
  }
}
else{
  var pDelta =  ( (uber_list[1][7] - uber_list[2][7]) / (uber_list[1][2] - uber_list[2][2]) ).toFixed(2) *1 ;
}
pDelta ;

//option gammas
//calls

//var cgd1 = ( (uber_list[3][4] - uber_list[4][4]) / (uber_list[3][2]  - uber_list[4][2] ) ).toFixed(8) * 1 ;
//cgd1;

//var cgd2 = ( (uber_list[4][4] - uber_list[5][4]) / (uber_list[4][2]  - uber_list[5][2] ) ).toFixed(8) * 1 ;
//cgd2;

//var cgd3 = ( (uber_list[3][2] - uber_list[5][2]  ) / 2).toFixed(8) * 1 ;
//cgd3;

//var cGamma = ( (cgd1 - cgd2) / cgd3 ).toFixed(2) * 1;
//cGamma;

////
//puts

//var pgd1 = ( (uber_list[3][7] - uber_list[4][7]) / (uber_list[3][2]  - uber_list[4][2] ) ).toFixed(8) * 1 ;
//pgd1;

//var pgd2 = ( (uber_list[4][7] - uber_list[5][7]) / (uber_list[4][2]  - uber_list[5][2] ) ).toFixed(8) * 1 ;
//pgd2;

//var pgd3 = ( (uber_list[3][2] - uber_list[5][2]  ) / 2).toFixed(8) * 1 ;
//pgd3;

//var pGamma = ( (pgd1 - pgd2) / pgd3 ).toFixed(2) * 1;
//pGamma;


//calls

function callGamma () {

  if ( daysToExpir <= 0 ){
    var cGammaF = 0 ;
  }
  else if (bbranches <= 1){
    var cGammaF = ("N/A for 1 Branch or less");
  }
  else{
    var cgd1 = ( (uber_list[3][4] - uber_list[4][4]) / (uber_list[3][2]  - uber_list[4][2] ) ).toFixed(2) * 1 ;
    var cgd2 = ( (uber_list[4][4] - uber_list[5][4]) / (uber_list[4][2]  - uber_list[5][2] ) ).toFixed(2) * 1 ;
    var cgd3 = ( (uber_list[3][2] - uber_list[5][2]  ) / 2).toFixed(2) * 1 ;
    var cGammaF = ( (cgd1 - cgd2) / cgd3 ).toFixed(2) * 1;
  }

  return cGammaF

}

var cGamma = callGamma () ;
cGamma;





////
//puts

function putGamma () {

  if ( daysToExpir <= 0 ){
    var pGammaF = 0 ;
  }
  else if (bbranches <= 1){
    var pGammaF = ("N/A for 1 Branch or less");
  }
  else{
    var pgd1 = ( (uber_list[3][7] - uber_list[4][7]) / (uber_list[3][2]  - uber_list[4][2] ) ).toFixed(2) * 1 ;
    var pgd2 = ( (uber_list[4][7] - uber_list[5][7]) / (uber_list[4][2]  - uber_list[5][2] ) ).toFixed(2) * 1 ;
    var pgd3 = ( (uber_list[3][2] - uber_list[5][2]  ) / 2).toFixed(2) * 1 ;
    var pGammaF = ( (pgd1 - pgd2) / pgd3 ).toFixed(2) * 1;
  }

  return pGammaF


}

var pGamma = putGamma () ;
pGamma;


//Out Put to the website
//option values
document.getElementById("americanCall").value = americanCallValueOutPut.toFixed(2);
document.getElementById("americanPut").value = americanPutValueOutPut.toFixed(2);

// option deltas
document.getElementById("americanCallDelta").value = cDelta;
document.getElementById("americanPutDelta").value = pDelta;

//option gammas
document.getElementById("americanCallGamma").value = cGamma;
document.getElementById("americanPutGamma").value = pGamma;


//document.getElementById("euroCallBinomial").value = euroCallValueOutPut.toFixed(2);
//document.getElementById("euroPutBinomial").value = euroPutValueOutPut.toFixed(2);
























////////////THETA/////////////////////

//START BINOMIAL

//////////////CLEAN STOCK PRICES //////////
////first creates an up_node list (highest price for each branch)//////
//need to make divsPerBranchList, exDivStockPxPerBranch, then current method to creat new up_node list with divs///

var currStockPx = wStockPx * 1;

var strike = wStrikePx * 1;
var daysToExpir = (wDaysToExpir - 1) * 1;
var bbranches = wNumberOfBranches * 1;
var daysPerBranch = daysToExpir / bbranches;

var e = 2.718281828459045 ;

var vol = (wVol / 100) * 1 ;
var time = (daysToExpir / 365)  ;
var timePerBranch = (time / bbranches) ;
var u = e**( vol * ((time/bbranches)**0.5) );
var d = 1 / u ;
var r = (wRate / 100) * 1 ;
var rr = e**( r * timePerBranch) ;
var p = (rr-d)/(u-d) ;

var pvFactor = e**( r * timePerBranch * (-1) ) ;







var div1 = wDiv1 * 1;
var daysToDiv1Ex = wExDiv1Date * 1;
var divBranch1 = daysToDiv1Ex / daysPerBranch;
var cleanDivBranch1 = Math.ceil(divBranch1);

var div2 = wDiv2 * 1;
var daysToDiv2Ex = wExDiv2Date * 1;
var divBranch2 = daysToDiv2Ex / daysPerBranch;
var cleanDivBranch2 = Math.ceil(divBranch2);

var div3 = wDiv3 * 1;
var daysToDiv3Ex = wExDiv3Date * 1;
var divBranch3 = daysToDiv3Ex / daysPerBranch;
var cleanDivBranch3 = Math.ceil(divBranch3);

var div4 = wDiv4 * 1;
var daysToDiv4Ex = wExDiv4Date * 1;
var divBranch4 = daysToDiv4Ex / daysPerBranch;
var cleanDivBranch4 = Math.ceil(divBranch4);

var div5 = 0;
var daysToDiv5Ex = 300;
var divBranch5 = daysToDiv5Ex / daysPerBranch;
var cleanDivBranch5 = Math.ceil(divBranch5);

var div6 = 0;
var daysToDiv6Ex = 300;
var divBranch6 = daysToDiv6Ex / daysPerBranch;
var cleanDivBranch6 = Math.ceil(divBranch6);

var div7 = 0;
var daysToDiv7Ex = 542;
var divBranch7 = daysToDiv7Ex / daysPerBranch;
var cleanDivBranch7 = Math.ceil(divBranch7);

var div8 = 0;
var daysToDiv8Ex = 632;
var divBranch8 = daysToDiv8Ex / daysPerBranch;
var cleanDivBranch8 = Math.ceil(divBranch8);


var divInfo = [[1, cleanDivBranch1, div1],[2, cleanDivBranch2, div2],[3, cleanDivBranch3, div3],[4, cleanDivBranch4, div4],[5, cleanDivBranch5, div5],[6, cleanDivBranch6, div6],[7, cleanDivBranch7, div7],[8, cleanDivBranch8, div8]];

/////////////////////////////////////////////

// assembles list of when the branch starts in terms of days from now....now being day zero, or you could say time zero
// the number of items equals the number of branches.
// good to use to diplay below the branches and nodes on the website display

function siteDataForDaysFromNowForEachBranchStart (){

  var count = 0;
  var iter = 0;
  var startDay = [];

  while (count <= bbranches){

    var sd = daysPerBranch * count ;
    var cleanStartDay =  sd.toFixed(2) * 1 ;
    startDay.push( cleanStartDay);
    count = count + 1;

  }

  return startDay

}

var siteDataForDaysFromNowForEachBranchStartList = siteDataForDaysFromNowForEachBranchStart ();
siteDataForDaysFromNowForEachBranchStartList;

/////////////////////////////////////////////

// assembles the branch start days from now (now being day zero) for each nodes
// this can be zipped to super_list or uber_list


function daysFromNowForEachBranchEnd (){

  var count = 0;
  var iter = 0;
  var startDay = [];


  while (count <= bbranches){

    while ( iter <= count ){

      var sd = daysPerBranch * count ;
      var cleanStartDay =  sd.toFixed(2) * 1 ;
      startDay.push( cleanStartDay);
      iter = iter + 1;

    }

    iter = 0;
    count = count + 1;

  }

  return startDay

}

var dayBranchEndsOn = daysFromNowForEachBranchEnd ();
dayBranchEndsOn;


/////////////////////////////////////////////////////////////////////////cleans zero branch div to 1

function cleanDivInfoZeroBranchFilter (){
  var count = 0;
   var iter = 0;
  var cleanDivInfoZeroBranchFilterList = [];
  var divInfoLength = divInfo.length;

  while (count<=(divInfoLength-1)){
    if (divInfo[count][1]===0){
      cleanDivInfoZeroBranchFilterList.push([1,divInfo[count][2]]);
    }
    else{
      cleanDivInfoZeroBranchFilterList.push([divInfo[count][1],divInfo[count][2]]);
    }

    count = count + 1 ;

  }
  return cleanDivInfoZeroBranchFilterList
}

var cleanDivInfoNoZeroBranchDivList = cleanDivInfoZeroBranchFilter();

///////////////////////////////////////////////////////////////////////


function cleanDivInfoThird (){
  var count = 0;
  var iter = 0;
  var cleanDivInfoList = [];
  var divInfoLength = divInfo.length;

  while (count<divInfoLength){

    if (count === (divInfoLength -1) ){
      cleanDivInfoList.push([cleanDivInfoNoZeroBranchDivList[count][0],cleanDivInfoNoZeroBranchDivList[count][1]])
      count = count + 1
      // this statement fixes range prob on last div

    }



    else if ( (cleanDivInfoNoZeroBranchDivList[count][0]) === (cleanDivInfoNoZeroBranchDivList[count+1][0]) ) {

      var divX = (cleanDivInfoNoZeroBranchDivList[count][1] + cleanDivInfoNoZeroBranchDivList[count+1][1]);
      //on last div in list..this statement has a prob bc it goes out of range..so first statement was added

      cleanDivInfoList.push([cleanDivInfoNoZeroBranchDivList[count][0],divX]);

      count = count + 2

    }
    else{
      cleanDivInfoList.push([cleanDivInfoNoZeroBranchDivList[count][0],cleanDivInfoNoZeroBranchDivList[count][1]]);
      count = count + 1;
    }


  }



  return cleanDivInfoList

}

var cleanDivInfoThirdFilter = cleanDivInfoThird();



/////////////////////////////////////////////////////////////


function cleanDivInfoFour (){
  var count = 0;
  var iter = 0;
  var cleanDivInfoList = [];
  var divInfoLength = cleanDivInfoThirdFilter.length;

  while (count<divInfoLength){

    if (count === (divInfoLength -1) ){
      cleanDivInfoList.push([cleanDivInfoThirdFilter[count][0],cleanDivInfoThirdFilter[count][1]])
      count = count + 1

    }



    else if ( (cleanDivInfoThirdFilter[count][0]) === (cleanDivInfoThirdFilter[count+1][0]) ) {

      var divX = (cleanDivInfoThirdFilter[count][1] + cleanDivInfoThirdFilter[count+1][1]);

      cleanDivInfoList.push([cleanDivInfoThirdFilter[count][0],divX]);

      count = count + 2

    }
    else{
      cleanDivInfoList.push([cleanDivInfoThirdFilter[count][0],cleanDivInfoThirdFilter[count][1]]);
      count = count + 1;
    }


  }



  return cleanDivInfoList

}

var cleanDivInfoFourFilter = cleanDivInfoFour();



/////////////////////////////////////////////////////////////

function cleanDivInfoFive (){
  var count = 0;
  var iter = 0;
  var cleanDivInfoList = [];
  var divInfoLength = cleanDivInfoFourFilter.length;

  while (count<divInfoLength){

    if (count === (divInfoLength -1) ){
      cleanDivInfoList.push([cleanDivInfoFourFilter[count][0],cleanDivInfoFourFilter[count][1]])
      count = count + 1

    }



    else if ( (cleanDivInfoFourFilter[count][0]) === (cleanDivInfoFourFilter[count+1][0]) ) {

      var divX = (cleanDivInfoFourFilter[count][1] + cleanDivInfoFourFilter[count+1][1]);

      cleanDivInfoList.push([cleanDivInfoFourFilter[count][0],divX]);

      count = count + 2

    }
    else{
      cleanDivInfoList.push([cleanDivInfoFourFilter[count][0],cleanDivInfoFourFilter[count][1]]);
      count = count + 1;
    }


  }



  return cleanDivInfoList

}

var cleanDivInfoFiveFilter = cleanDivInfoFive();




//////////////////////////////////////////////////////////////


function scrubDivInfo () {

  cleanDivInfoNoZeroBranchDivList;
  cleanDivInfoThirdFilter;
  cleanDivInfoFourFilter;
  cleanDivInfoFiveFilter;

  return cleanDivInfoFiveFilter



}

var scrubbedDivList = scrubDivInfo();
scrubbedDivList;

/// !!!!!!!!!!!! more divs can be added..just need to add more filters...scrubNumber function will tell you how many filter you need...
/// !!!!!!!!!!!!  3-4 divs or less needs 2 filters, 5-8 divs needs 3 filters, 9-16 needs 4 filters, 17-32 needs 5 filters, 33-64 needs 6..
/// !!!!!!!!!!!!  it's filters needed is:   (Amount of Divs) / (2**Filters) , if there is a remainder then incread amount of filters by 1.

//////////////////////////////////////////////////////////////

function scrubNumber () {

  var count = 0;
  var iter = 0;
  var divInfoLength = divInfo.length;

  while ((2**count) < divInfoLength) {

    count = count + 1;
  }
  return count

}

var numberOfScrubs = scrubNumber()

/////////////////////////////////////////////////////////////


function divBones () {
  var count = 1;
  var divBonesList = [];

  while (count <= bbranches){
    divBonesList.push([count,0])
    count = count + 1;
  }
  return divBonesList
}

var divyBones = divBones()

divyBones;

/////////////////////////////////////////////////////////


function scrubbedDivListFinal () {
  var count = 0;
  var iter = scrubbedDivList.length;
  var scrubbedFinalList = [];

  while (count < (iter-1)) {

    if (scrubbedDivList[count][0] <= bbranches){

      scrubbedFinalList.push(scrubbedDivList[count]);

    }
    count = count + 1;
  }

  return scrubbedFinalList

}

var finalDivScrub = scrubbedDivListFinal ()

finalDivScrub;


////////////////////////////////////////////////////////

function divBranchInfo () {

  var count = 0;
  var iter = 0;
  var divBranchList = [];
  var maxIter = (finalDivScrub.length - 1)


  if (finalDivScrub.length === 0){
    divBranchList = divyBones;
  }
  else{

    while (count < (bbranches)){

      if (divyBones[count][0] === finalDivScrub[iter][0]){
        divBranchList.push(finalDivScrub[iter]);
        count = count +1;
        if (iter < maxIter) {
          iter = iter + 1;}

      }
      else{
        divBranchList.push(divyBones[count]);
        count = count + 1;
      }
    }

  }



  return divBranchList

}

var finalDivBranchList = divBranchInfo ();
finalDivBranchList;


/////////////////////////////////////////////////////////


function cumlaDiv (){
  var count = 0;
  var cumlative = 0;
  var iter = finalDivBranchList.length;
  var cumlaDivList = [];

  while (count < iter) {
    cumlative = cumlative + finalDivBranchList[count][1];
    cumlaDivList.push(cumlative);
    count = count + 1;

  }
  return cumlaDivList
}

var cumlativeDivPerBranch = cumlaDiv();
cumlativeDivPerBranch;


///////////////////////////////////////////////////////

function stockPxPerBranch () {
  var count = 0;
  var iter = cumlativeDivPerBranch.length;
  var stockPxExDiv = [currStockPx]

  while (count < iter) {

    stockPxExDiv.push(currStockPx - cumlativeDivPerBranch[count]);
    count = count + 1;

  }

  return stockPxExDiv

}

var stockPxExDivPerBranch = stockPxPerBranch ();
stockPxExDivPerBranch;

///////////////////////////////////////////////////////////////////

// takes the finalDivBranchList (which does not include div info on Zero Branch bc there cannot be an ex-div on the zero branch) and
// creates the div branch info for the nodes of each branch.....example: on the 5th Branch there will be 6 nodes.....
// what ever the div is on the 5th Branch (could be zero) it will create 6 items of the same number (the number being the div on that branch)
// can be zipped to super_list and uber_list


function divInfoForNode (){

  var count = 1;
  var iter = 0;
  var divNode = [0];


  while (count <= bbranches) {


    while (iter <= count){

      divNode.push(finalDivBranchList[count-1][1]) ;

      iter = iter + 1;

    }

    iter = 0;
    count = count + 1;

  }
  return divNode

}

var divBranchInfoForNode = divInfoForNode ();
divBranchInfoForNode;


////////////////////////////////////////////////////////////////

// takes the exDivStockPxPerBranch list (which includes the current stock px on branch zero)(there cannot be a ex-div or ex-div stock px
// on branch zero)....and makes an ex-div stock px for each node on that branch
// can be zipped to super_list and uber_list


function exDivStockPxforNode (){

  var count = 0;
  var iter = 0;
  var exDivNode = [];

  while (count <= bbranches){

    while (iter <= count){

      exDivNode.push( stockPxExDivPerBranch [count] );

      iter = iter + 1;
    }

    iter = 0;
    count = count + 1;
  }

  return exDivNode

}

var exDivStockPxPerBranchForNode = exDivStockPxforNode ();
exDivStockPxPerBranchForNode;



////////////////////////////////////////////////////////////////////

/// up nodes ////////

function up_node(){
  var last_up_px = bbranches;
  var exponent = 0;
  var iter = 0;
  var count = 0;
  var up_move = u;
  var up_list = [];

  while (iter <= last_up_px){
    up_list.push(stockPxExDivPerBranch[count]*(up_move**iter))
    count = count + 1
    iter = iter + 1 ;
  }

  return up_list

}

var up_node_pxs = up_node()

up_node_pxs;



/////builds rest of the nodes of each branch based on highest node//////
function all_stock_pxs (){

  var last_up_px = bbranches;
  var exponent = 0;
  var iter = 0;
  var count = 0;
  var up_move = u;
  var down_move = (1 / up_move);
  var node_down_increment = down_move / up_move
  var all_list = [];

  while (iter <= last_up_px){

    while (exponent <= iter){
      all_list.push(up_node_pxs[iter]*(node_down_increment**exponent));
      exponent = exponent + 1;
    }

    iter = iter + 1;
    exponent = 0;

  }

  return all_list

}


var raw_all_stock_pxs = all_stock_pxs();

raw_all_stock_pxs;


////rounds all the stock pxs at each node to two decmils///////

function clean_raw_all_stock_pxs (){

  var clean_all_stock_pxs = [];
  var count = 0;
  var clean_count = (raw_all_stock_pxs.length - 1);

  while (count <= clean_count){
    var scrub = ((raw_all_stock_pxs[count]).toFixed(8)) * 1 ;
    clean_all_stock_pxs.push(scrub);
    count = count + 1;

  }

  return clean_all_stock_pxs

}

var clean_all_stock_pxs_list = clean_raw_all_stock_pxs();
clean_all_stock_pxs_list;


//////////////////CLEAN STOCK PRICES ////////////////////


///////////////////////////  BRANCH LIST /////////////////////////////



function branchList(){

  var branch_number_list =[];
  var last_address = bbranches;
  var iter = 0;
  var count = 0;

  while(count<=last_address){
    while(iter<=last_address){
      branch_number_list.push(last_address);
      iter = iter + 1;
    }
    iter = 0;
    last_address = last_address -1;
  }


  return branch_number_list.reverse()
}

var branchListAll = branchList();
branchListAll;

///////////////////////////  BRANCH LIST /////////////////////////////



//////////////////////////// NODE LIST ///////////////////////////////

function nodeList(){

  var node_number_list =[];
  var last_address = bbranches;
  var iter = 0;
  var count = 0;

  while(count<=last_address){
    while(iter<=last_address){
      node_number_list.push(iter);
      iter = iter + 1;
    }
    iter = 0;
    last_address = last_address -1;
  }


  return node_number_list.reverse()
}

var nodeListAll = nodeList();
nodeListAll;


//////////////////////////// NODE LIST ///////////////////////////////


////////// ZIP UP ///////////////

function zip_up (x,y,z){
  var iter1 = x.length - 1;
  child1 = []
  parent1 = []
  count = 0

  while (count <= iter1){

    child1.push(x[count])
    child1.push(y[count])
    child1.push(z[count])

    parent1.push(child1)
    child1 = []
    count = count + 1

  }

  return parent1

}

//////////////// ZIP UP ////////////////


var pxs = clean_all_stock_pxs_list;  ///// line 714 to 884 ////

var nL = nodeList(bbranches);      //// 681 to 699  /////

var bL = branchList(bbranches);      ////// 655 to 681  ////////

var super_list = zip_up(bL,nL,pxs);          ///////// 933 to 955 /////////

super_list;


////////////////////////////////////////////////////
//Call Intrinsic Value List

function callIntrinsicValueAtEachNode () {

    var count = 0;
    var iter = 0;
    var callIntrinsic = [];

    while (count < super_list.length){
        var callIntrinsicValue = ( super_list[count][2] - strike );
        var cleanCallIntrinsicValue = callIntrinsicValue.toFixed(8) * 1;
        if (cleanCallIntrinsicValue > 0){
            callIntrinsic.push( cleanCallIntrinsicValue );
            count = count + 1;
        }
        else{
            callIntrinsic.push(0);
            count = count + 1;
        }


    }
    return callIntrinsic
}

var callIntrinsicAtEachNodeList = callIntrinsicValueAtEachNode () ;
callIntrinsicAtEachNodeList;
// this can be zipped to super_list bc its the same sequence

/////////////////////////////////////////////////////

function backwardInductionCallIntrinsicSequence () {

  var count = bbranches;
  var iter = bbranches;
  var place = bbranches + 1;
  var callIntrinsicBackwardInductionSequence = [];
  var num = callIntrinsicAtEachNodeList.length;

  while (count >= 0 ){

    while (iter >= 0 ){
      callIntrinsicBackwardInductionSequence.push(callIntrinsicAtEachNodeList[num-place]);
      iter = iter -1 ;
      place = place -1 ;

    }
    place = bbranches + 1;
    num = num - count;
    count = count -1 ;
    iter = count;


  }


  return callIntrinsicBackwardInductionSequence

}

var callIntrinsicBackwardInductionSequenceList = backwardInductionCallIntrinsicSequence () ;
callIntrinsicBackwardInductionSequenceList;

//the can be zipped to callValueAtEachNodeMaster which might be renamed to euroCallValueAtEachNode

////////////////////////////////////////////////////


// gets call payouts on final nodes


// isolates the index numbers of the final nodes on super_list

function amountOfNodes(branchNumber) {

    var nodes = (branchNumber + 2) * ((branchNumber +1) / 2);

    return nodes
}

var totalNodes = amountOfNodes(bbranches);
totalNodes;

var totalNodesSecondToLastBranch = amountOfNodes(bbranches -1);
totalNodesSecondToLastBranch;

var totalNodesThirdToLastBranch = amountOfNodes(bbranches -2);
totalNodesThirdToLastBranch;


//


function callFinalNodePayOuts () {

    var count = 0;
    var iter = totalNodesSecondToLastBranch;
    var callFinalPayOutList = [];


    while (count <= bbranches){
        var callPayOut = super_list[iter][2] - strike ;
        var cleanCallPayOut = callPayOut.toFixed(8) * 1;
        if (cleanCallPayOut > 0){
            callFinalPayOutList.push(cleanCallPayOut);
            iter = iter + 1;
        }
        else{
            callFinalPayOutList.push(0);
            iter = iter + 1;
        }
        count = count + 1;
    }
    return callFinalPayOutList
}

var callFinalBranchPayOutList = callFinalNodePayOuts ();
callFinalBranchPayOutList;

////////////////////////////////////////////////////////////////////////
// creates an index list to make call values using p on up nodes and 1-p on down nodes from thirdToLastBranch to zero branch
// using backward induction.  dont need it for terminal branch and secondToLastBranch

function mapPath () {

  var count = 0;
  var iter = 0;
  var gen = totalNodesThirdToLastBranch;
  var seq = (bbranches - 2) ;
  var mapList = [];
  var mapNum = 0;

  while (seq >= 0) {

    while (iter <= seq) {
      mapList.push(mapNum);
      if (iter < seq) {
        mapNum = mapNum + 1;
      }
      else{
        mapNum = mapNum + 2;
      }

      iter = iter + 1;
    }

    iter = 0;
    seq = seq -1;

  }

  return mapList

}

var parentList = mapPath () ;
parentList;


///////////////////////////////////////////////////////////////////////



function callValueNonTerminalNodes3 (){

    var count = 0;
    var iter  = 0;
    var callValueAtNode = []

    while (count < bbranches){
      var cVal = pvFactor * ( (p * callFinalBranchPayOutList[count]) + ( (1-p) * callFinalBranchPayOutList[count+1] ) ) ;
      var cleanCVal = ( cVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCVal ) ;

      count = count + 1;

    }

    while (iter < totalNodesThirdToLastBranch){

      var callVal = pvFactor * ( (p * callValueAtNode[parentList[iter]]) + ( (1-p) * callValueAtNode[parentList[iter]+1] ) );
      var cleanCallVal = ( callVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCallVal ) ;

      iter = iter + 1;


    }

    return callValueAtNode

}

var callValueAtEachNodeList3 = callValueNonTerminalNodes3 () ;
callValueAtEachNodeList3;








///////////////////////////////////////////////////////////////////////
//this combines callFinalBranchPayOutList with callValueAtEachNodeList3 to make euroCallValueAtEachNodeMaster
// last value in euroCallValueAtEachNodeMaster is euroCallValue

function callNodeMaster () {

  var count = 0;
  var iter = 0;
  var callNodeMasterList = [];
  var finalBranchLength = callFinalBranchPayOutList.length;
  var nonFinalBranchLength = callValueAtEachNodeList3.length;

  while (count < finalBranchLength){
    callNodeMasterList.push(callFinalBranchPayOutList[count]);
    count = count + 1
  }

  while (iter < nonFinalBranchLength) {
    callNodeMasterList.push(callValueAtEachNodeList3[iter]);
    iter = iter + 1;
  }

  return callNodeMasterList
}

var euroCallValueAtEachNodeMaster = callNodeMaster();
euroCallValueAtEachNodeMaster;

var euroCallValue = euroCallValueAtEachNodeMaster[euroCallValueAtEachNodeMaster.length-1];
euroCallValue;


/////////////////////////////////////////////////////////////////

// assembles euroCallValueAtEachNodeMaster into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// the first item of the resulting array is also the euro call value:  euroCallAtEachNodeListInSuperListSequence[0]
// this can be zipped to super_list


function reverseEuroCallBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = euroCallValueAtEachNodeMaster.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(euroCallValueAtEachNodeMaster[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var euroCallAtEachNodeListInSuperListSequence = reverseEuroCallBackwardInductionSequence ();
euroCallAtEachNodeListInSuperListSequence;



////////////////////////////////////////////////////////////////////////////
//  this creates a list of the call intrinsic value for all non-terminal nodes in the backward induction sequence
//  this can be compared to callValueAtEachNodeList3 to make a list for American Call Value using backward induction

function callIntrinsicBackwardInductionSequenceList_NonTerminalNodes () {

  var count = 0;
  var iter = 0;
  var callIntrinsicBackwardInductionNonTerminalList = []
  var num = callIntrinsicBackwardInductionSequenceList.length - (bbranches + 1 ) ;
  var indexIter = callIntrinsicBackwardInductionSequenceList.length - totalNodesSecondToLastBranch ;

  while (count < num){

    callIntrinsicBackwardInductionNonTerminalList.push( callIntrinsicBackwardInductionSequenceList[indexIter] );
    indexIter = indexIter + 1;
    count = count + 1;

  }
  return callIntrinsicBackwardInductionNonTerminalList
}

var callIntrinsicAtEachNodeBackwardInductionNonTerminalList = callIntrinsicBackwardInductionSequenceList_NonTerminalNodes ();
callIntrinsicAtEachNodeBackwardInductionNonTerminalList;

var callIntrinsicSecondToLastBranchNodesBackward_Slice = callIntrinsicAtEachNodeBackwardInductionNonTerminalList.slice(0,(bbranches));
callIntrinsicSecondToLastBranchNodesBackward_Slice;

var callIntrinsic_After_SecondToLastBranchNodesBackward_Slice = callIntrinsicAtEachNodeBackwardInductionNonTerminalList.slice((bbranches),(callIntrinsicAtEachNodeBackwardInductionNonTerminalList.length) );
callIntrinsic_After_SecondToLastBranchNodesBackward_Slice;


////////////////////////////////////////////////////////////////////////////
// if intrinsic value of call is higher than euro call value on a particular node, then intrinsic value replaces euro value
// on that particular node

function americanCallBackwardInduction (){

    var count = 0;
    var iter  = 0;
    var callValueAtNode = [];


    while (count < bbranches){
      var cIntVal = callIntrinsicSecondToLastBranchNodesBackward_Slice[count];
      var cEuroVal = pvFactor * ( (p * callFinalBranchPayOutList[count]) + ( (1-p) * callFinalBranchPayOutList[count+1] ) ) ;


      if(cIntVal > cEuroVal){
        var cVal = cIntVal;

      }
      else{
        var cVal = cEuroVal;

      }


      var cleanCVal = ( cVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCVal ) ;

      count = count + 1;

    }





    while (iter < totalNodesThirdToLastBranch){

      var callIntVal = callIntrinsic_After_SecondToLastBranchNodesBackward_Slice[iter];

      var callEuroVal = pvFactor * ( (p * callValueAtNode[parentList[iter]]) + ( (1-p) * callValueAtNode[parentList[iter]+1] ) );


      if(callIntVal > callEuroVal){
        var callVal = callIntVal;
      }
      else{
        var callVal = callEuroVal;
      }


      var cleanCallVal = ( callVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCallVal ) ;

      iter = iter + 1;


    }

    return callValueAtNode

}

var americanCallValueAtEachNonTerminalNode = americanCallBackwardInduction () ;
americanCallValueAtEachNonTerminalNode;

///////////////////////////////////////////
// assembles the full list of american call value on each node by combining callFinalBranchPayOutList with americanCallValueAtEachNonTerminalNode
// last item on the list americanCallAtEachNodeList is the americanCallValue

function americanCallValueAtEachNode (){

  var count = 0;
  var iter = 0;
  var americanCallValList = []

  while (count <= bbranches){

    americanCallValList.push(callFinalBranchPayOutList[count]);
    count = count + 1;

  }

  while (iter < totalNodesSecondToLastBranch){

    americanCallValList.push(americanCallValueAtEachNonTerminalNode[iter]);
    iter = iter + 1;

  }

  return americanCallValList

}

var americanCallAtEachNodeList = americanCallValueAtEachNode () ;
americanCallAtEachNodeList;

var americanCallValue = americanCallAtEachNodeList[americanCallAtEachNodeList.length-1];
americanCallValue;




////////////////////////////////////////////////////////////////////////////

//#11

// assembles americanCallAtEachNodeList into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// the first item of the resulting array is also the american put value:  americanCallAtEachNodeListInSuperListSequence[0]
// this can be zipped to super_list



function reverseCallBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = americanCallAtEachNodeList.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(americanCallAtEachNodeList[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var americanCallAtEachNodeListInSuperListSequence = reverseCallBackwardInductionSequence ();
americanCallAtEachNodeListInSuperListSequence;


//////////////////////////////////////////////////////////////////////////////////////////

//#12
// if intrinsic value of call is higher than euro call value on a particular node, then "yes" is returned
// if it is the nodes on the final branch then "N/A" is returned bc this is the final payout (euro and american values are derived from the final payouts)
// therefore there is nothing to compare on the final branch
// this is in backward induction sequence

function callIntrinsicGreaterThanEuro (){

    var count = 0;
    var iter  = 0;
    var place = 0;
    var callValueAtNode = [];
    var intrinsicGreater = [];


    while (place <= bbranches){
      intrinsicGreater.push("N/A")
      place = place + 1;
    }



    while (count < bbranches){
      var cIntVal = callIntrinsicSecondToLastBranchNodesBackward_Slice[count];
      var cEuroVal = (p * callFinalBranchPayOutList[count]) + ( (1-p) * callFinalBranchPayOutList[count+1] ) ;


      if(cIntVal > cEuroVal){
        var cVal = cIntVal;
        intrinsicGreater.push("yes");

      }
      else{
        var cVal = cEuroVal;
        intrinsicGreater.push("no");

      }


      var cleanCVal = ( cVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCVal ) ;

      count = count + 1;

    }





    while (iter < totalNodesThirdToLastBranch){

      var callIntVal = callIntrinsic_After_SecondToLastBranchNodesBackward_Slice[iter];

      var callEuroVal = (p * callValueAtNode[parentList[iter]]) + ( (1-p) * callValueAtNode[parentList[iter]+1] );


      if(callIntVal > callEuroVal){
        var callVal = callIntVal;
        intrinsicGreater.push("yes");
      }
      else{
        var callVal = callEuroVal;
        intrinsicGreater.push("no");
      }


      var cleanCallVal = ( callVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCallVal ) ;

      iter = iter + 1;


    }

    return intrinsicGreater

}

var callIntrinsicGreaterThanEuroYesNo = callIntrinsicGreaterThanEuro () ;
callIntrinsicGreaterThanEuroYesNo;


////////////////////////////////////////////////////////////

//#13

// assembles callIntrinsicGreaterThanEuroYesNo into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// this can be zipped to super_list



function reverseCallIntrinsicVsEuroBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = callIntrinsicGreaterThanEuroYesNo.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(callIntrinsicGreaterThanEuroYesNo[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var callIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence = reverseCallIntrinsicVsEuroBackwardInductionSequence ();
callIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence;




//end of calls

//////////////////////////////////////////////////////////////////////////////////////////






//// PUTS  (start at line 606 to start copying functions for calls and turning into puts)
////////////////////////////////////////////////////

//#1
//Put Intrinsic Value List
// this is the put intrinsic value at each node to the ex-div stock px.  starts with (0,0), (1,0), (1,1), (2,0).....to terminal nodes
//so if a branch has a div assigned to it, then the stock px will drop by the price of the div.....that is the ex-div stock px.
// ref:  (super_list: line 600), (finalDivBranchList, line 371), (cumlativeDivPerBranch, line 393), (stockPxExDivPerBranch, line 415)
// this can be zipped to super_list bc its the same sequence


function putIntrinsicValueAtEachNode () {

    var count = 0;
    var iter = 0;
    var putIntrinsic = [];

    while (count < super_list.length){
        var putIntrinsicValue = ( strike - super_list[count][2] );
        var cleanPutIntrinsicValue = putIntrinsicValue.toFixed(8) * 1;
        if (cleanPutIntrinsicValue > 0){
            putIntrinsic.push( cleanPutIntrinsicValue );
            count = count + 1;
        }
        else{
            putIntrinsic.push(0);
            count = count + 1;
        }


    }
    return putIntrinsic
}

var putIntrinsicAtEachNodeList = putIntrinsicValueAtEachNode () ;
putIntrinsicAtEachNodeList;


/////////////////////////////////////////////////////////////////////////////

//#2
// this is the put intrinsic value at each node to the ex-div stock px, but it is in the backward induction sequence
// terminal nodes start first:  (terminal,0),(terminal,1),(terminal,2).....(2,0),(2,1),(2,2),(1,0),(1,1),(0,0)
// need this format to work backwards to the american value
//the can be zipped to euroPutValueAtEachNodeMaster, line ??.  The last item in euroPutValueAtEachNodeMaster is the euro put value.
//euroPutValueAtEachNodeMaster is in the backward induction sequence.


function backwardInductionPutIntrinsicSequence () {

  var count = bbranches;
  var iter = bbranches;
  var place = bbranches + 1;
  var putIntrinsicBackwardInductionSequence = [];
  var num = putIntrinsicAtEachNodeList.length;

  while (count >= 0 ){

    while (iter >= 0 ){
      putIntrinsicBackwardInductionSequence.push(putIntrinsicAtEachNodeList[num-place]);
      iter = iter -1 ;
      place = place -1 ;

    }
    place = bbranches + 1;
    num = num - count;
    count = count -1 ;
    iter = count;


  }


  return putIntrinsicBackwardInductionSequence

}

var putIntrinsicBackwardInductionSequenceList = backwardInductionPutIntrinsicSequence () ;
putIntrinsicBackwardInductionSequenceList;



////////////////////////////////////////////////////

//#3

// gets put payouts on final nodes


// isolates the index numbers of the final nodes on super_list to get the put payouts at the terminal nodes
// then we can work backwards to node 0,0 for euro and american put values.

function amountOfNodes(branchNumber) {

    var nodes = (branchNumber + 2) * ((branchNumber +1) / 2);

    return nodes
}

var totalNodes = amountOfNodes(bbranches);
totalNodes;

var totalNodesSecondToLastBranch = amountOfNodes(bbranches -1);
totalNodesSecondToLastBranch;

var totalNodesThirdToLastBranch = amountOfNodes(bbranches -2);
totalNodesThirdToLastBranch;


//


function putFinalNodePayOuts () {

    var count = 0;
    var iter = totalNodesSecondToLastBranch;
    var putFinalPayOutList = [];


    while (count <= bbranches){
        var putPayOut = strike - super_list[iter][2] ;
        var cleanPutPayOut = putPayOut.toFixed(8) * 1;
        if (cleanPutPayOut > 0){
            putFinalPayOutList.push(cleanPutPayOut);
            iter = iter + 1;
        }
        else{
            putFinalPayOutList.push(0);
            iter = iter + 1;
        }
        count = count + 1;
    }
    return putFinalPayOutList
}

var putFinalBranchPayOutList = putFinalNodePayOuts ();
putFinalBranchPayOutList;

////////////////////////////////////////////////////////////////////////


//#4

// creates an index list to make put values using p on up nodes and 1-p on down nodes from thirdToLastBranch to zero branch
// using backward induction.  dont need it for terminal branch and secondToLastBranch
// backward induction starts from the terminal branch. The second to last branch is easily genertated from the terminal branch.
// after that, there is problem generating each branch.  You need a child node to reference two parent nodes on the previous branch..
// on each branch, the index numbers of the parent nodes jumps by two instead of one.  So we need to create and index map
// so that each child references the correct parent nodes.
// this is easily done in python by going to the end of a list with:  list_name[-1].
// this could have been done in JS with :  array_name[array_name.length].....however I did it the long way with a map list bc
// I wasnt thinking clearly at the time

function mapPath () {

  var count = 0;
  var iter = 0;
  var gen = totalNodesThirdToLastBranch;
  var seq = (bbranches - 2) ;
  var mapList = [];
  var mapNum = 0;

  while (seq >= 0) {

    while (iter <= seq) {
      mapList.push(mapNum);
      if (iter < seq) {
        mapNum = mapNum + 1;
      }
      else{
        mapNum = mapNum + 2;
      }

      iter = iter + 1;
    }

    iter = 0;
    seq = seq -1;

  }

  return mapList

}

var parentList = mapPath () ;
parentList;


///////////////////////////////////////////////////////////////////////

//#5
// this will create the euro put value for each non-terminal node (second to last node to the 0,0 node)
// this is in the backward induction sequence
// fist while loop creates the second to last branch off of the terminal nodes and places the node values into an array
// within the function.  the array is putValueAtNode.
// once putValueAtNode is created, the second while loop is self replicating down to the 0,0 node.
// this is a very nice peice of code.


function putValueNonTerminalNodes3 (){

    var count = 0;
    var iter  = 0;
    var putValueAtNode = []

    while (count < bbranches){
      var pVal = pvFactor * ( (p * putFinalBranchPayOutList[count]) + ( (1-p) * putFinalBranchPayOutList[count+1] ) ) ;
      var cleanPVal = ( pVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPVal ) ;

      count = count + 1;

    }

    while (iter < totalNodesThirdToLastBranch){

      var putVal = pvFactor * ( (p * putValueAtNode[parentList[iter]]) + ( (1-p) * putValueAtNode[parentList[iter]+1] ) ) ;
      var cleanPutVal = ( putVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPutVal ) ;

      iter = iter + 1;


    }

    return putValueAtNode

}

var putValueAtEachNodeList3 = putValueNonTerminalNodes3 () ;
putValueAtEachNodeList3;


///////////////////////////////////////////////////////////////////////

//#6
//this combines putFinalBranchPayOutList with putValueAtEachNodeList3 to make euroPutValueAtEachNodeMaster
// this is in backward induction sequence
// last value in euroPutValueAtEachNodeMaster is euroPutValue

function putNodeMaster () {

  var count = 0;
  var iter = 0;
  var putNodeMasterList = [];
  var finalBranchLength = putFinalBranchPayOutList.length;
  var nonFinalBranchLength = putValueAtEachNodeList3.length;

  while (count < finalBranchLength){
    putNodeMasterList.push(putFinalBranchPayOutList[count]);
    count = count + 1
  }

  while (iter < nonFinalBranchLength) {
    putNodeMasterList.push(putValueAtEachNodeList3[iter]);
    iter = iter + 1;
  }

  return putNodeMasterList
}

var euroPutValueAtEachNodeMaster = putNodeMaster();
euroPutValueAtEachNodeMaster;

var euroPutValue = euroPutValueAtEachNodeMaster[euroPutValueAtEachNodeMaster.length-1];
euroPutValue;


//////////////////////////////////////////////////////////////////////////

//#7

// assembles euroPutValueAtEachNodeMaster into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// the first item of the resulting array is also the euro put value:  euroPutAtEachNodeListInSuperListSequence[0]
// this can be zipped to super_list


function reverseEuroPutBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = euroPutValueAtEachNodeMaster.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(euroPutValueAtEachNodeMaster[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var euroPutAtEachNodeListInSuperListSequence = reverseEuroPutBackwardInductionSequence ();
euroPutAtEachNodeListInSuperListSequence;



//////////////////////////////////////////////////////////////////////////

//#8
//  this creates a list of the put intrinsic value for all non-terminal nodes in the backward induction sequence
//  this can be compared to putValueAtEachNodeList3 to make a list for American Put Value which is in  backward induction sequence

function putIntrinsicBackwardInductionSequenceList_NonTerminalNodes () {

  var count = 0;
  var iter = 0;
  var putIntrinsicBackwardInductionNonTerminalList = []
  var num = putIntrinsicBackwardInductionSequenceList.length - (bbranches + 1 ) ;
  var indexIter = putIntrinsicBackwardInductionSequenceList.length - totalNodesSecondToLastBranch ;

  while (count < num){

    putIntrinsicBackwardInductionNonTerminalList.push( putIntrinsicBackwardInductionSequenceList[indexIter] );
    indexIter = indexIter + 1;
    count = count + 1;

  }
  return putIntrinsicBackwardInductionNonTerminalList
}

var putIntrinsicAtEachNodeBackwardInductionNonTerminalList = putIntrinsicBackwardInductionSequenceList_NonTerminalNodes ();
putIntrinsicAtEachNodeBackwardInductionNonTerminalList;

var putIntrinsicSecondToLastBranchNodesBackward_Slice = putIntrinsicAtEachNodeBackwardInductionNonTerminalList.slice(0,(bbranches));
putIntrinsicSecondToLastBranchNodesBackward_Slice;

var putIntrinsic_After_SecondToLastBranchNodesBackward_Slice = putIntrinsicAtEachNodeBackwardInductionNonTerminalList.slice((bbranches),(putIntrinsicAtEachNodeBackwardInductionNonTerminalList.length) );
putIntrinsic_After_SecondToLastBranchNodesBackward_Slice;


///////////////////////////////////////////////////////////////////////////////

//#9
// if intrinsic value of put is higher than euro put value on a particular node, then intrinsic value replaces euro value
// this is in backward induction sequence
// on that particular node

function americanPutBackwardInduction (){

    var count = 0;
    var iter  = 0;
    var putValueAtNode = [];


    while (count < bbranches){
      var pIntVal = putIntrinsicSecondToLastBranchNodesBackward_Slice[count];
      var pEuroVal = pvFactor * ( (p * putFinalBranchPayOutList[count]) + ( (1-p) * putFinalBranchPayOutList[count+1] ) ) ;


      if(pIntVal > pEuroVal){
        var pVal = pIntVal;

      }
      else{
        var pVal = pEuroVal;

      }


      var cleanPVal = ( pVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPVal ) ;

      count = count + 1;

    }





    while (iter < totalNodesThirdToLastBranch){

      var putIntVal = putIntrinsic_After_SecondToLastBranchNodesBackward_Slice[iter];

      var putEuroVal = pvFactor * ( (p * putValueAtNode[parentList[iter]]) + ( (1-p) * putValueAtNode[parentList[iter]+1] ) );


      if(putIntVal > putEuroVal){
        var putVal = putIntVal;
      }
      else{
        var putVal = putEuroVal;
      }


      var cleanPutVal = ( putVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPutVal ) ;

      iter = iter + 1;


    }

    return putValueAtNode

}

var americanPutValueAtEachNonTerminalNode = americanPutBackwardInduction () ;
americanPutValueAtEachNonTerminalNode;



///////////////////////////////////////////////////////////////////////////////

//#10

// assembles the full list of american put value on each node by combining putFinalBranchPayOutList with americanPutValueAtEachNonTerminalNode
// this is in backward induction sequence
// last item on the list americanPutAtEachNodeList is the americanPutValue

function americanPutValueAtEachNode (){

  var count = 0;
  var iter = 0;
  var americanPutValList = []

  while (count <= bbranches){

    americanPutValList.push(putFinalBranchPayOutList[count]);
    count = count + 1;

  }

  while (iter < totalNodesSecondToLastBranch){

    americanPutValList.push(americanPutValueAtEachNonTerminalNode[iter]);
    iter = iter + 1;

  }

  return americanPutValList

}

var americanPutAtEachNodeList = americanPutValueAtEachNode () ;
americanPutAtEachNodeList;

var americanPutValue = americanPutAtEachNodeList[americanPutAtEachNodeList.length-1];
americanPutValue;




///////////////////////////////////////////////////////////////////////////////

//#11

// assembles americanPutAtEachNodeList into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// the first item of the resulting array is also the american put value:  americanPutAtEachNodeListInSuperListSequence[0]
// this can be zipped to super_list



function reversePutBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = americanPutAtEachNodeList.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(americanPutAtEachNodeList[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var americanPutAtEachNodeListInSuperListSequence = reversePutBackwardInductionSequence ();
americanPutAtEachNodeListInSuperListSequence;


//////////////////////////////////////////////////////////////////////////////////////////

//#12
// if intrinsic value of put is higher than euro put value on a particular node, then "yes" is returned
// if it is the nodes on the final branch then "N/A" is returned bc this is the final payout (euro and american values are derived from the final payouts)
// therefore there is nothing to compare on the final branch
// this is in backward induction sequence

function putIntrinsicGreaterThanEuro (){

    var count = 0;
    var iter  = 0;
    var place = 0;
    var putValueAtNode = [];
    var intrinsicGreater = [];


    while (place <= bbranches){
      intrinsicGreater.push("N/A")
      place = place + 1;
    }



    while (count < bbranches){
      var pIntVal = putIntrinsicSecondToLastBranchNodesBackward_Slice[count];
      var pEuroVal = (p * putFinalBranchPayOutList[count]) + ( (1-p) * putFinalBranchPayOutList[count+1] ) ;


      if(pIntVal > pEuroVal){
        var pVal = pIntVal;
        intrinsicGreater.push("yes");

      }
      else{
        var pVal = pEuroVal;
        intrinsicGreater.push("no");

      }


      var cleanPVal = ( pVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPVal ) ;

      count = count + 1;

    }





    while (iter < totalNodesThirdToLastBranch){

      var putIntVal = putIntrinsic_After_SecondToLastBranchNodesBackward_Slice[iter];

      var putEuroVal = (p * putValueAtNode[parentList[iter]]) + ( (1-p) * putValueAtNode[parentList[iter]+1] );


      if(putIntVal > putEuroVal){
        var putVal = putIntVal;
        intrinsicGreater.push("yes");
      }
      else{
        var putVal = putEuroVal;
        intrinsicGreater.push("no");
      }


      var cleanPutVal = ( putVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPutVal ) ;

      iter = iter + 1;


    }

    return intrinsicGreater

}

var putIntrinsicGreaterThanEuroYesNo = putIntrinsicGreaterThanEuro () ;
putIntrinsicGreaterThanEuroYesNo;


//////////////////////////////////////////////////////////////////////

//#13

// assembles putIntrinsicGreaterThanEuroYesNo into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// this can be zipped to super_list



function reversePutIntrinsicVsEuroBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = putIntrinsicGreaterThanEuroYesNo.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(putIntrinsicGreaterThanEuroYesNo[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var putIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence = reversePutIntrinsicVsEuroBackwardInductionSequence ();
putIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence;


//////////////////////////////////////////////////////////////////////////////////////////



// FINAL WRAP UP OF INFO IN ARRAYS  ///
////////// ZIP UP TWO ///////////////

function zip_up5 (x,y,z,a,b,c,d,e,f,g,h,i){
  var iter1 = x.length - 1;
  child1 = []
  parent1 = []
  count = 0

  while (count <= iter1){

    child1.push(x[count])
    child1.push(y[count])
    child1.push(z[count])
    child1.push(a[count])
    child1.push(b[count])
    child1.push(c[count])
    child1.push(d[count])
    child1.push(e[count])
    child1.push(f[count])
    child1.push(g[count])
    child1.push(h[count])
    child1.push(i[count])


    parent1.push(child1)
    child1 = []
    count = count + 1

  }

  return parent1

}

//////////////// ZIP UP TWO ////////////////


var pxs = clean_all_stock_pxs_list;  ///// line 714 to 884 ////

var nL = nodeList(bbranches);      //// 681 to 699  /////

var bL = branchList(bbranches);      ////// 655 to 681  ////////

var euroCall = euroCallAtEachNodeListInSuperListSequence;

var euroPut = euroPutAtEachNodeListInSuperListSequence;

var americanCall = americanCallAtEachNodeListInSuperListSequence;

var cIntGrtEuro = callIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence;

var americanPut = americanPutAtEachNodeListInSuperListSequence;

var pIntGrtEuro = putIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence;

var divPerBranchOnEachNode = divBranchInfoForNode;      //// line 425 to 452 /////

var exDivStockPxPerBranchOnEachNode = exDivStockPxPerBranchForNode;    ///// line 462 to 486 ////

var branchEndDay = dayBranchEndsOn;      // line 79 to 104 //


var uber_list = zip_up5(bL,nL,pxs, euroCall, americanCall, cIntGrtEuro, euroPut, americanPut, pIntGrtEuro, divPerBranchOnEachNode, exDivStockPxPerBranchOnEachNode, branchEndDay );

uber_list;


//option values

//american call
function aCVOP () {
  if (daysToExpir <= 0){
    if ( (currStockPx - strike) > 0 ){
      var aCall = currStockPx - strike ;
    }
    else{
      var aCall = 0;
    }
  }
  else{
    var aCall = uber_list[0][4];
  }

  return aCall
}

var americanCallValueTheta = aCVOP() ;
americanCallValueTheta;

//american put
function aPVOP () {
  if (daysToExpir <= 0){
    if ( (strike - currStockPx) > 0 ){
      var aPut =  strike - currStockPx;
    }
    else{
      var aPut = 0;
    }
  }
  else{
    var aPut = uber_list[0][7];
  }

  return aPut
}

var americanPutValueTheta = aPVOP() ;
americanPutValueTheta;


//euro call
function eCVOP () {
  if (daysToExpir <= 0){
    if ( (currStockPx - strike) > 0 ){
      var eCall = currStockPx - strike ;
    }
    else{
      var eCall = 0;
    }
  }
  else{
    var eCall = uber_list[0][3];
  }

  return eCall
}

var euroCallValueTheta = eCVOP() ;
euroCallValueTheta;


//euro put
function ePVOP () {
  if (daysToExpir <= 0){
    if ( (strike - currStockPx) > 0 ){
      var ePut =  strike - currStockPx;
    }
    else{
      var ePut = 0;
    }
  }
  else{
    var ePut = uber_list[0][6];
  }

  return ePut
}

var euroPutValueTheta = ePVOP() ;
euroPutValueTheta;

//var americanCallValueTheta = uber_list[0][4];
//var americanPutValueTheta = uber_list[0][7];
//var euroCallValueTheta = uber_list[0][3];
//var euroPutValueOutTheta = uber_list[0][6];

var callThetaAmerican = americanCallValueTheta - americanCallValueOutPut;
var putThetaAmerican =  americanPutValueTheta - americanPutValueOutPut;


//option thetas
document.getElementById("americanCallTheta").value = callThetaAmerican.toFixed(3);
document.getElementById("americanPutTheta").value =  putThetaAmerican.toFixed(3);

















//////////// VEGA /////////////////////

//START BINOMIAL

//////////////CLEAN STOCK PRICES //////////
////first creates an up_node list (highest price for each branch)//////
//need to make divsPerBranchList, exDivStockPxPerBranch, then current method to creat new up_node list with divs///

var currStockPx = wStockPx * 1;

var strike = wStrikePx * 1;
var daysToExpir = (wDaysToExpir) * 1;
var bbranches = wNumberOfBranches * 1;
var daysPerBranch = daysToExpir / bbranches;

var e = 2.718281828459045 ;

var vol = ( ( wVol / 100) * 1 ) + 0.01 ;
var time = (daysToExpir / 365)  ;
var timePerBranch = (time / bbranches) ;
var u = e**( vol * ((time/bbranches)**0.5) );
var d = 1 / u ;
var r = (wRate / 100) * 1 ;
var rr = e**( r * timePerBranch) ;
var p = (rr-d)/(u-d) ;

var pvFactor = e**( r * timePerBranch * (-1) ) ;







var div1 = wDiv1 * 1;
var daysToDiv1Ex = wExDiv1Date * 1;
var divBranch1 = daysToDiv1Ex / daysPerBranch;
var cleanDivBranch1 = Math.ceil(divBranch1);

var div2 = wDiv2 * 1;
var daysToDiv2Ex = wExDiv2Date * 1;
var divBranch2 = daysToDiv2Ex / daysPerBranch;
var cleanDivBranch2 = Math.ceil(divBranch2);

var div3 = wDiv3 * 1;
var daysToDiv3Ex = wExDiv3Date * 1;
var divBranch3 = daysToDiv3Ex / daysPerBranch;
var cleanDivBranch3 = Math.ceil(divBranch3);

var div4 = wDiv4 * 1;
var daysToDiv4Ex = wExDiv4Date * 1;
var divBranch4 = daysToDiv4Ex / daysPerBranch;
var cleanDivBranch4 = Math.ceil(divBranch4);

var div5 = 0;
var daysToDiv5Ex = 300;
var divBranch5 = daysToDiv5Ex / daysPerBranch;
var cleanDivBranch5 = Math.ceil(divBranch5);

var div6 = 0;
var daysToDiv6Ex = 300;
var divBranch6 = daysToDiv6Ex / daysPerBranch;
var cleanDivBranch6 = Math.ceil(divBranch6);

var div7 = 0;
var daysToDiv7Ex = 542;
var divBranch7 = daysToDiv7Ex / daysPerBranch;
var cleanDivBranch7 = Math.ceil(divBranch7);

var div8 = 0;
var daysToDiv8Ex = 632;
var divBranch8 = daysToDiv8Ex / daysPerBranch;
var cleanDivBranch8 = Math.ceil(divBranch8);


var divInfo = [[1, cleanDivBranch1, div1],[2, cleanDivBranch2, div2],[3, cleanDivBranch3, div3],[4, cleanDivBranch4, div4],[5, cleanDivBranch5, div5],[6, cleanDivBranch6, div6],[7, cleanDivBranch7, div7],[8, cleanDivBranch8, div8]];

/////////////////////////////////////////////

// assembles list of when the branch starts in terms of days from now....now being day zero, or you could say time zero
// the number of items equals the number of branches.
// good to use to diplay below the branches and nodes on the website display

function siteDataForDaysFromNowForEachBranchStart (){

  var count = 0;
  var iter = 0;
  var startDay = [];

  while (count <= bbranches){

    var sd = daysPerBranch * count ;
    var cleanStartDay =  sd.toFixed(2) * 1 ;
    startDay.push( cleanStartDay);
    count = count + 1;

  }

  return startDay

}

var siteDataForDaysFromNowForEachBranchStartList = siteDataForDaysFromNowForEachBranchStart ();
siteDataForDaysFromNowForEachBranchStartList;

/////////////////////////////////////////////

// assembles the branch start days from now (now being day zero) for each nodes
// this can be zipped to super_list or uber_list


function daysFromNowForEachBranchEnd (){

  var count = 0;
  var iter = 0;
  var startDay = [];


  while (count <= bbranches){

    while ( iter <= count ){

      var sd = daysPerBranch * count ;
      var cleanStartDay =  sd.toFixed(2) * 1 ;
      startDay.push( cleanStartDay);
      iter = iter + 1;

    }

    iter = 0;
    count = count + 1;

  }

  return startDay

}

var dayBranchEndsOn = daysFromNowForEachBranchEnd ();
dayBranchEndsOn;


/////////////////////////////////////////////////////////////////////////cleans zero branch div to 1

function cleanDivInfoZeroBranchFilter (){
  var count = 0;
   var iter = 0;
  var cleanDivInfoZeroBranchFilterList = [];
  var divInfoLength = divInfo.length;

  while (count<=(divInfoLength-1)){
    if (divInfo[count][1]===0){
      cleanDivInfoZeroBranchFilterList.push([1,divInfo[count][2]]);
    }
    else{
      cleanDivInfoZeroBranchFilterList.push([divInfo[count][1],divInfo[count][2]]);
    }

    count = count + 1 ;

  }
  return cleanDivInfoZeroBranchFilterList
}

var cleanDivInfoNoZeroBranchDivList = cleanDivInfoZeroBranchFilter();

///////////////////////////////////////////////////////////////////////


function cleanDivInfoThird (){
  var count = 0;
  var iter = 0;
  var cleanDivInfoList = [];
  var divInfoLength = divInfo.length;

  while (count<divInfoLength){

    if (count === (divInfoLength -1) ){
      cleanDivInfoList.push([cleanDivInfoNoZeroBranchDivList[count][0],cleanDivInfoNoZeroBranchDivList[count][1]])
      count = count + 1
      // this statement fixes range prob on last div

    }



    else if ( (cleanDivInfoNoZeroBranchDivList[count][0]) === (cleanDivInfoNoZeroBranchDivList[count+1][0]) ) {

      var divX = (cleanDivInfoNoZeroBranchDivList[count][1] + cleanDivInfoNoZeroBranchDivList[count+1][1]);
      //on last div in list..this statement has a prob bc it goes out of range..so first statement was added

      cleanDivInfoList.push([cleanDivInfoNoZeroBranchDivList[count][0],divX]);

      count = count + 2

    }
    else{
      cleanDivInfoList.push([cleanDivInfoNoZeroBranchDivList[count][0],cleanDivInfoNoZeroBranchDivList[count][1]]);
      count = count + 1;
    }


  }



  return cleanDivInfoList

}

var cleanDivInfoThirdFilter = cleanDivInfoThird();



/////////////////////////////////////////////////////////////


function cleanDivInfoFour (){
  var count = 0;
  var iter = 0;
  var cleanDivInfoList = [];
  var divInfoLength = cleanDivInfoThirdFilter.length;

  while (count<divInfoLength){

    if (count === (divInfoLength -1) ){
      cleanDivInfoList.push([cleanDivInfoThirdFilter[count][0],cleanDivInfoThirdFilter[count][1]])
      count = count + 1

    }



    else if ( (cleanDivInfoThirdFilter[count][0]) === (cleanDivInfoThirdFilter[count+1][0]) ) {

      var divX = (cleanDivInfoThirdFilter[count][1] + cleanDivInfoThirdFilter[count+1][1]);

      cleanDivInfoList.push([cleanDivInfoThirdFilter[count][0],divX]);

      count = count + 2

    }
    else{
      cleanDivInfoList.push([cleanDivInfoThirdFilter[count][0],cleanDivInfoThirdFilter[count][1]]);
      count = count + 1;
    }


  }



  return cleanDivInfoList

}

var cleanDivInfoFourFilter = cleanDivInfoFour();



/////////////////////////////////////////////////////////////

function cleanDivInfoFive (){
  var count = 0;
  var iter = 0;
  var cleanDivInfoList = [];
  var divInfoLength = cleanDivInfoFourFilter.length;

  while (count<divInfoLength){

    if (count === (divInfoLength -1) ){
      cleanDivInfoList.push([cleanDivInfoFourFilter[count][0],cleanDivInfoFourFilter[count][1]])
      count = count + 1

    }



    else if ( (cleanDivInfoFourFilter[count][0]) === (cleanDivInfoFourFilter[count+1][0]) ) {

      var divX = (cleanDivInfoFourFilter[count][1] + cleanDivInfoFourFilter[count+1][1]);

      cleanDivInfoList.push([cleanDivInfoFourFilter[count][0],divX]);

      count = count + 2

    }
    else{
      cleanDivInfoList.push([cleanDivInfoFourFilter[count][0],cleanDivInfoFourFilter[count][1]]);
      count = count + 1;
    }


  }



  return cleanDivInfoList

}

var cleanDivInfoFiveFilter = cleanDivInfoFive();




//////////////////////////////////////////////////////////////


function scrubDivInfo () {

  cleanDivInfoNoZeroBranchDivList;
  cleanDivInfoThirdFilter;
  cleanDivInfoFourFilter;
  cleanDivInfoFiveFilter;

  return cleanDivInfoFiveFilter



}

var scrubbedDivList = scrubDivInfo();
scrubbedDivList;

/// !!!!!!!!!!!! more divs can be added..just need to add more filters...scrubNumber function will tell you how many filter you need...
/// !!!!!!!!!!!!  3-4 divs or less needs 2 filters, 5-8 divs needs 3 filters, 9-16 needs 4 filters, 17-32 needs 5 filters, 33-64 needs 6..
/// !!!!!!!!!!!!  it's filters needed is:   (Amount of Divs) / (2**Filters) , if there is a remainder then incread amount of filters by 1.

//////////////////////////////////////////////////////////////

function scrubNumber () {

  var count = 0;
  var iter = 0;
  var divInfoLength = divInfo.length;

  while ((2**count) < divInfoLength) {

    count = count + 1;
  }
  return count

}

var numberOfScrubs = scrubNumber()

/////////////////////////////////////////////////////////////


function divBones () {
  var count = 1;
  var divBonesList = [];

  while (count <= bbranches){
    divBonesList.push([count,0])
    count = count + 1;
  }
  return divBonesList
}

var divyBones = divBones()

divyBones;

/////////////////////////////////////////////////////////


function scrubbedDivListFinal () {
  var count = 0;
  var iter = scrubbedDivList.length;
  var scrubbedFinalList = [];

  while (count < (iter-1)) {

    if (scrubbedDivList[count][0] <= bbranches){

      scrubbedFinalList.push(scrubbedDivList[count]);

    }
    count = count + 1;
  }

  return scrubbedFinalList

}

var finalDivScrub = scrubbedDivListFinal ()

finalDivScrub;


////////////////////////////////////////////////////////

function divBranchInfo () {

  var count = 0;
  var iter = 0;
  var divBranchList = [];
  var maxIter = (finalDivScrub.length - 1)


  if (finalDivScrub.length === 0){
    divBranchList = divyBones;
  }
  else{

    while (count < (bbranches)){

      if (divyBones[count][0] === finalDivScrub[iter][0]){
        divBranchList.push(finalDivScrub[iter]);
        count = count +1;
        if (iter < maxIter) {
          iter = iter + 1;}

      }
      else{
        divBranchList.push(divyBones[count]);
        count = count + 1;
      }
    }

  }



  return divBranchList

}

var finalDivBranchList = divBranchInfo ();
finalDivBranchList;


/////////////////////////////////////////////////////////


function cumlaDiv (){
  var count = 0;
  var cumlative = 0;
  var iter = finalDivBranchList.length;
  var cumlaDivList = [];

  while (count < iter) {
    cumlative = cumlative + finalDivBranchList[count][1];
    cumlaDivList.push(cumlative);
    count = count + 1;

  }
  return cumlaDivList
}

var cumlativeDivPerBranch = cumlaDiv();
cumlativeDivPerBranch;


///////////////////////////////////////////////////////

function stockPxPerBranch () {
  var count = 0;
  var iter = cumlativeDivPerBranch.length;
  var stockPxExDiv = [currStockPx]

  while (count < iter) {

    stockPxExDiv.push(currStockPx - cumlativeDivPerBranch[count]);
    count = count + 1;

  }

  return stockPxExDiv

}

var stockPxExDivPerBranch = stockPxPerBranch ();
stockPxExDivPerBranch;

///////////////////////////////////////////////////////////////////

// takes the finalDivBranchList (which does not include div info on Zero Branch bc there cannot be an ex-div on the zero branch) and
// creates the div branch info for the nodes of each branch.....example: on the 5th Branch there will be 6 nodes.....
// what ever the div is on the 5th Branch (could be zero) it will create 6 items of the same number (the number being the div on that branch)
// can be zipped to super_list and uber_list


function divInfoForNode (){

  var count = 1;
  var iter = 0;
  var divNode = [0];


  while (count <= bbranches) {


    while (iter <= count){

      divNode.push(finalDivBranchList[count-1][1]) ;

      iter = iter + 1;

    }

    iter = 0;
    count = count + 1;

  }
  return divNode

}

var divBranchInfoForNode = divInfoForNode ();
divBranchInfoForNode;


////////////////////////////////////////////////////////////////

// takes the exDivStockPxPerBranch list (which includes the current stock px on branch zero)(there cannot be a ex-div or ex-div stock px
// on branch zero)....and makes an ex-div stock px for each node on that branch
// can be zipped to super_list and uber_list


function exDivStockPxforNode (){

  var count = 0;
  var iter = 0;
  var exDivNode = [];

  while (count <= bbranches){

    while (iter <= count){

      exDivNode.push( stockPxExDivPerBranch [count] );

      iter = iter + 1;
    }

    iter = 0;
    count = count + 1;
  }

  return exDivNode

}

var exDivStockPxPerBranchForNode = exDivStockPxforNode ();
exDivStockPxPerBranchForNode;



////////////////////////////////////////////////////////////////////

/// up nodes ////////

function up_node(){
  var last_up_px = bbranches;
  var exponent = 0;
  var iter = 0;
  var count = 0;
  var up_move = u;
  var up_list = [];

  while (iter <= last_up_px){
    up_list.push(stockPxExDivPerBranch[count]*(up_move**iter))
    count = count + 1
    iter = iter + 1 ;
  }

  return up_list

}

var up_node_pxs = up_node()

up_node_pxs;



/////builds rest of the nodes of each branch based on highest node//////
function all_stock_pxs (){

  var last_up_px = bbranches;
  var exponent = 0;
  var iter = 0;
  var count = 0;
  var up_move = u;
  var down_move = (1 / up_move);
  var node_down_increment = down_move / up_move
  var all_list = [];

  while (iter <= last_up_px){

    while (exponent <= iter){
      all_list.push(up_node_pxs[iter]*(node_down_increment**exponent));
      exponent = exponent + 1;
    }

    iter = iter + 1;
    exponent = 0;

  }

  return all_list

}


var raw_all_stock_pxs = all_stock_pxs();

raw_all_stock_pxs;


////rounds all the stock pxs at each node to two decmils///////

function clean_raw_all_stock_pxs (){

  var clean_all_stock_pxs = [];
  var count = 0;
  var clean_count = (raw_all_stock_pxs.length - 1);

  while (count <= clean_count){
    var scrub = ((raw_all_stock_pxs[count]).toFixed(8)) * 1 ;
    clean_all_stock_pxs.push(scrub);
    count = count + 1;

  }

  return clean_all_stock_pxs

}

var clean_all_stock_pxs_list = clean_raw_all_stock_pxs();
clean_all_stock_pxs_list;


//////////////////CLEAN STOCK PRICES ////////////////////


///////////////////////////  BRANCH LIST /////////////////////////////



function branchList(){

  var branch_number_list =[];
  var last_address = bbranches;
  var iter = 0;
  var count = 0;

  while(count<=last_address){
    while(iter<=last_address){
      branch_number_list.push(last_address);
      iter = iter + 1;
    }
    iter = 0;
    last_address = last_address -1;
  }


  return branch_number_list.reverse()
}

var branchListAll = branchList();
branchListAll;

///////////////////////////  BRANCH LIST /////////////////////////////



//////////////////////////// NODE LIST ///////////////////////////////

function nodeList(){

  var node_number_list =[];
  var last_address = bbranches;
  var iter = 0;
  var count = 0;

  while(count<=last_address){
    while(iter<=last_address){
      node_number_list.push(iter);
      iter = iter + 1;
    }
    iter = 0;
    last_address = last_address -1;
  }


  return node_number_list.reverse()
}

var nodeListAll = nodeList();
nodeListAll;


//////////////////////////// NODE LIST ///////////////////////////////


////////// ZIP UP ///////////////

function zip_up (x,y,z){
  var iter1 = x.length - 1;
  child1 = []
  parent1 = []
  count = 0

  while (count <= iter1){

    child1.push(x[count])
    child1.push(y[count])
    child1.push(z[count])

    parent1.push(child1)
    child1 = []
    count = count + 1

  }

  return parent1

}

//////////////// ZIP UP ////////////////


var pxs = clean_all_stock_pxs_list;  ///// line 714 to 884 ////

var nL = nodeList(bbranches);      //// 681 to 699  /////

var bL = branchList(bbranches);      ////// 655 to 681  ////////

var super_list = zip_up(bL,nL,pxs);          ///////// 933 to 955 /////////

super_list;


////////////////////////////////////////////////////
//Call Intrinsic Value List

function callIntrinsicValueAtEachNode () {

    var count = 0;
    var iter = 0;
    var callIntrinsic = [];

    while (count < super_list.length){
        var callIntrinsicValue = ( super_list[count][2] - strike );
        var cleanCallIntrinsicValue = callIntrinsicValue.toFixed(8) * 1;
        if (cleanCallIntrinsicValue > 0){
            callIntrinsic.push( cleanCallIntrinsicValue );
            count = count + 1;
        }
        else{
            callIntrinsic.push(0);
            count = count + 1;
        }


    }
    return callIntrinsic
}

var callIntrinsicAtEachNodeList = callIntrinsicValueAtEachNode () ;
callIntrinsicAtEachNodeList;
// this can be zipped to super_list bc its the same sequence

/////////////////////////////////////////////////////

function backwardInductionCallIntrinsicSequence () {

  var count = bbranches;
  var iter = bbranches;
  var place = bbranches + 1;
  var callIntrinsicBackwardInductionSequence = [];
  var num = callIntrinsicAtEachNodeList.length;

  while (count >= 0 ){

    while (iter >= 0 ){
      callIntrinsicBackwardInductionSequence.push(callIntrinsicAtEachNodeList[num-place]);
      iter = iter -1 ;
      place = place -1 ;

    }
    place = bbranches + 1;
    num = num - count;
    count = count -1 ;
    iter = count;


  }


  return callIntrinsicBackwardInductionSequence

}

var callIntrinsicBackwardInductionSequenceList = backwardInductionCallIntrinsicSequence () ;
callIntrinsicBackwardInductionSequenceList;

//the can be zipped to callValueAtEachNodeMaster which might be renamed to euroCallValueAtEachNode

////////////////////////////////////////////////////


// gets call payouts on final nodes


// isolates the index numbers of the final nodes on super_list

function amountOfNodes(branchNumber) {

    var nodes = (branchNumber + 2) * ((branchNumber +1) / 2);

    return nodes
}

var totalNodes = amountOfNodes(bbranches);
totalNodes;

var totalNodesSecondToLastBranch = amountOfNodes(bbranches -1);
totalNodesSecondToLastBranch;

var totalNodesThirdToLastBranch = amountOfNodes(bbranches -2);
totalNodesThirdToLastBranch;


//


function callFinalNodePayOuts () {

    var count = 0;
    var iter = totalNodesSecondToLastBranch;
    var callFinalPayOutList = [];


    while (count <= bbranches){
        var callPayOut = super_list[iter][2] - strike ;
        var cleanCallPayOut = callPayOut.toFixed(8) * 1;
        if (cleanCallPayOut > 0){
            callFinalPayOutList.push(cleanCallPayOut);
            iter = iter + 1;
        }
        else{
            callFinalPayOutList.push(0);
            iter = iter + 1;
        }
        count = count + 1;
    }
    return callFinalPayOutList
}

var callFinalBranchPayOutList = callFinalNodePayOuts ();
callFinalBranchPayOutList;

////////////////////////////////////////////////////////////////////////
// creates an index list to make call values using p on up nodes and 1-p on down nodes from thirdToLastBranch to zero branch
// using backward induction.  dont need it for terminal branch and secondToLastBranch

function mapPath () {

  var count = 0;
  var iter = 0;
  var gen = totalNodesThirdToLastBranch;
  var seq = (bbranches - 2) ;
  var mapList = [];
  var mapNum = 0;

  while (seq >= 0) {

    while (iter <= seq) {
      mapList.push(mapNum);
      if (iter < seq) {
        mapNum = mapNum + 1;
      }
      else{
        mapNum = mapNum + 2;
      }

      iter = iter + 1;
    }

    iter = 0;
    seq = seq -1;

  }

  return mapList

}

var parentList = mapPath () ;
parentList;


///////////////////////////////////////////////////////////////////////



function callValueNonTerminalNodes3 (){

    var count = 0;
    var iter  = 0;
    var callValueAtNode = []

    while (count < bbranches){
      var cVal = pvFactor * ( (p * callFinalBranchPayOutList[count]) + ( (1-p) * callFinalBranchPayOutList[count+1] ) ) ;
      var cleanCVal = ( cVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCVal ) ;

      count = count + 1;

    }

    while (iter < totalNodesThirdToLastBranch){

      var callVal = pvFactor * ( (p * callValueAtNode[parentList[iter]]) + ( (1-p) * callValueAtNode[parentList[iter]+1] ) );
      var cleanCallVal = ( callVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCallVal ) ;

      iter = iter + 1;


    }

    return callValueAtNode

}

var callValueAtEachNodeList3 = callValueNonTerminalNodes3 () ;
callValueAtEachNodeList3;








///////////////////////////////////////////////////////////////////////
//this combines callFinalBranchPayOutList with callValueAtEachNodeList3 to make euroCallValueAtEachNodeMaster
// last value in euroCallValueAtEachNodeMaster is euroCallValue

function callNodeMaster () {

  var count = 0;
  var iter = 0;
  var callNodeMasterList = [];
  var finalBranchLength = callFinalBranchPayOutList.length;
  var nonFinalBranchLength = callValueAtEachNodeList3.length;

  while (count < finalBranchLength){
    callNodeMasterList.push(callFinalBranchPayOutList[count]);
    count = count + 1
  }

  while (iter < nonFinalBranchLength) {
    callNodeMasterList.push(callValueAtEachNodeList3[iter]);
    iter = iter + 1;
  }

  return callNodeMasterList
}

var euroCallValueAtEachNodeMaster = callNodeMaster();
euroCallValueAtEachNodeMaster;

var euroCallValue = euroCallValueAtEachNodeMaster[euroCallValueAtEachNodeMaster.length-1];
euroCallValue;


/////////////////////////////////////////////////////////////////

// assembles euroCallValueAtEachNodeMaster into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// the first item of the resulting array is also the euro call value:  euroCallAtEachNodeListInSuperListSequence[0]
// this can be zipped to super_list


function reverseEuroCallBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = euroCallValueAtEachNodeMaster.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(euroCallValueAtEachNodeMaster[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var euroCallAtEachNodeListInSuperListSequence = reverseEuroCallBackwardInductionSequence ();
euroCallAtEachNodeListInSuperListSequence;



////////////////////////////////////////////////////////////////////////////
//  this creates a list of the call intrinsic value for all non-terminal nodes in the backward induction sequence
//  this can be compared to callValueAtEachNodeList3 to make a list for American Call Value using backward induction

function callIntrinsicBackwardInductionSequenceList_NonTerminalNodes () {

  var count = 0;
  var iter = 0;
  var callIntrinsicBackwardInductionNonTerminalList = []
  var num = callIntrinsicBackwardInductionSequenceList.length - (bbranches + 1 ) ;
  var indexIter = callIntrinsicBackwardInductionSequenceList.length - totalNodesSecondToLastBranch ;

  while (count < num){

    callIntrinsicBackwardInductionNonTerminalList.push( callIntrinsicBackwardInductionSequenceList[indexIter] );
    indexIter = indexIter + 1;
    count = count + 1;

  }
  return callIntrinsicBackwardInductionNonTerminalList
}

var callIntrinsicAtEachNodeBackwardInductionNonTerminalList = callIntrinsicBackwardInductionSequenceList_NonTerminalNodes ();
callIntrinsicAtEachNodeBackwardInductionNonTerminalList;

var callIntrinsicSecondToLastBranchNodesBackward_Slice = callIntrinsicAtEachNodeBackwardInductionNonTerminalList.slice(0,(bbranches));
callIntrinsicSecondToLastBranchNodesBackward_Slice;

var callIntrinsic_After_SecondToLastBranchNodesBackward_Slice = callIntrinsicAtEachNodeBackwardInductionNonTerminalList.slice((bbranches),(callIntrinsicAtEachNodeBackwardInductionNonTerminalList.length) );
callIntrinsic_After_SecondToLastBranchNodesBackward_Slice;


////////////////////////////////////////////////////////////////////////////
// if intrinsic value of call is higher than euro call value on a particular node, then intrinsic value replaces euro value
// on that particular node

function americanCallBackwardInduction (){

    var count = 0;
    var iter  = 0;
    var callValueAtNode = [];


    while (count < bbranches){
      var cIntVal = callIntrinsicSecondToLastBranchNodesBackward_Slice[count];
      var cEuroVal = pvFactor * ( (p * callFinalBranchPayOutList[count]) + ( (1-p) * callFinalBranchPayOutList[count+1] ) ) ;


      if(cIntVal > cEuroVal){
        var cVal = cIntVal;

      }
      else{
        var cVal = cEuroVal;

      }


      var cleanCVal = ( cVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCVal ) ;

      count = count + 1;

    }





    while (iter < totalNodesThirdToLastBranch){

      var callIntVal = callIntrinsic_After_SecondToLastBranchNodesBackward_Slice[iter];

      var callEuroVal = pvFactor * ( (p * callValueAtNode[parentList[iter]]) + ( (1-p) * callValueAtNode[parentList[iter]+1] ) );


      if(callIntVal > callEuroVal){
        var callVal = callIntVal;
      }
      else{
        var callVal = callEuroVal;
      }


      var cleanCallVal = ( callVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCallVal ) ;

      iter = iter + 1;


    }

    return callValueAtNode

}

var americanCallValueAtEachNonTerminalNode = americanCallBackwardInduction () ;
americanCallValueAtEachNonTerminalNode;

///////////////////////////////////////////
// assembles the full list of american call value on each node by combining callFinalBranchPayOutList with americanCallValueAtEachNonTerminalNode
// last item on the list americanCallAtEachNodeList is the americanCallValue

function americanCallValueAtEachNode (){

  var count = 0;
  var iter = 0;
  var americanCallValList = []

  while (count <= bbranches){

    americanCallValList.push(callFinalBranchPayOutList[count]);
    count = count + 1;

  }

  while (iter < totalNodesSecondToLastBranch){

    americanCallValList.push(americanCallValueAtEachNonTerminalNode[iter]);
    iter = iter + 1;

  }

  return americanCallValList

}

var americanCallAtEachNodeList = americanCallValueAtEachNode () ;
americanCallAtEachNodeList;

var americanCallValue = americanCallAtEachNodeList[americanCallAtEachNodeList.length-1];
americanCallValue;




////////////////////////////////////////////////////////////////////////////

//#11

// assembles americanCallAtEachNodeList into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// the first item of the resulting array is also the american put value:  americanCallAtEachNodeListInSuperListSequence[0]
// this can be zipped to super_list



function reverseCallBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = americanCallAtEachNodeList.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(americanCallAtEachNodeList[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var americanCallAtEachNodeListInSuperListSequence = reverseCallBackwardInductionSequence ();
americanCallAtEachNodeListInSuperListSequence;


//////////////////////////////////////////////////////////////////////////////////////////

//#12
// if intrinsic value of call is higher than euro call value on a particular node, then "yes" is returned
// if it is the nodes on the final branch then "N/A" is returned bc this is the final payout (euro and american values are derived from the final payouts)
// therefore there is nothing to compare on the final branch
// this is in backward induction sequence

function callIntrinsicGreaterThanEuro (){

    var count = 0;
    var iter  = 0;
    var place = 0;
    var callValueAtNode = [];
    var intrinsicGreater = [];


    while (place <= bbranches){
      intrinsicGreater.push("N/A")
      place = place + 1;
    }



    while (count < bbranches){
      var cIntVal = callIntrinsicSecondToLastBranchNodesBackward_Slice[count];
      var cEuroVal = (p * callFinalBranchPayOutList[count]) + ( (1-p) * callFinalBranchPayOutList[count+1] ) ;


      if(cIntVal > cEuroVal){
        var cVal = cIntVal;
        intrinsicGreater.push("yes");

      }
      else{
        var cVal = cEuroVal;
        intrinsicGreater.push("no");

      }


      var cleanCVal = ( cVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCVal ) ;

      count = count + 1;

    }





    while (iter < totalNodesThirdToLastBranch){

      var callIntVal = callIntrinsic_After_SecondToLastBranchNodesBackward_Slice[iter];

      var callEuroVal = (p * callValueAtNode[parentList[iter]]) + ( (1-p) * callValueAtNode[parentList[iter]+1] );


      if(callIntVal > callEuroVal){
        var callVal = callIntVal;
        intrinsicGreater.push("yes");
      }
      else{
        var callVal = callEuroVal;
        intrinsicGreater.push("no");
      }


      var cleanCallVal = ( callVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCallVal ) ;

      iter = iter + 1;


    }

    return intrinsicGreater

}

var callIntrinsicGreaterThanEuroYesNo = callIntrinsicGreaterThanEuro () ;
callIntrinsicGreaterThanEuroYesNo;


////////////////////////////////////////////////////////////

//#13

// assembles callIntrinsicGreaterThanEuroYesNo into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// this can be zipped to super_list



function reverseCallIntrinsicVsEuroBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = callIntrinsicGreaterThanEuroYesNo.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(callIntrinsicGreaterThanEuroYesNo[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var callIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence = reverseCallIntrinsicVsEuroBackwardInductionSequence ();
callIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence;




//end of calls

//////////////////////////////////////////////////////////////////////////////////////////






//// PUTS  (start at line 606 to start copying functions for calls and turning into puts)
////////////////////////////////////////////////////

//#1
//Put Intrinsic Value List
// this is the put intrinsic value at each node to the ex-div stock px.  starts with (0,0), (1,0), (1,1), (2,0).....to terminal nodes
//so if a branch has a div assigned to it, then the stock px will drop by the price of the div.....that is the ex-div stock px.
// ref:  (super_list: line 600), (finalDivBranchList, line 371), (cumlativeDivPerBranch, line 393), (stockPxExDivPerBranch, line 415)
// this can be zipped to super_list bc its the same sequence


function putIntrinsicValueAtEachNode () {

    var count = 0;
    var iter = 0;
    var putIntrinsic = [];

    while (count < super_list.length){
        var putIntrinsicValue = ( strike - super_list[count][2] );
        var cleanPutIntrinsicValue = putIntrinsicValue.toFixed(8) * 1;
        if (cleanPutIntrinsicValue > 0){
            putIntrinsic.push( cleanPutIntrinsicValue );
            count = count + 1;
        }
        else{
            putIntrinsic.push(0);
            count = count + 1;
        }


    }
    return putIntrinsic
}

var putIntrinsicAtEachNodeList = putIntrinsicValueAtEachNode () ;
putIntrinsicAtEachNodeList;


/////////////////////////////////////////////////////////////////////////////

//#2
// this is the put intrinsic value at each node to the ex-div stock px, but it is in the backward induction sequence
// terminal nodes start first:  (terminal,0),(terminal,1),(terminal,2).....(2,0),(2,1),(2,2),(1,0),(1,1),(0,0)
// need this format to work backwards to the american value
//the can be zipped to euroPutValueAtEachNodeMaster, line ??.  The last item in euroPutValueAtEachNodeMaster is the euro put value.
//euroPutValueAtEachNodeMaster is in the backward induction sequence.


function backwardInductionPutIntrinsicSequence () {

  var count = bbranches;
  var iter = bbranches;
  var place = bbranches + 1;
  var putIntrinsicBackwardInductionSequence = [];
  var num = putIntrinsicAtEachNodeList.length;

  while (count >= 0 ){

    while (iter >= 0 ){
      putIntrinsicBackwardInductionSequence.push(putIntrinsicAtEachNodeList[num-place]);
      iter = iter -1 ;
      place = place -1 ;

    }
    place = bbranches + 1;
    num = num - count;
    count = count -1 ;
    iter = count;


  }


  return putIntrinsicBackwardInductionSequence

}

var putIntrinsicBackwardInductionSequenceList = backwardInductionPutIntrinsicSequence () ;
putIntrinsicBackwardInductionSequenceList;



////////////////////////////////////////////////////

//#3

// gets put payouts on final nodes


// isolates the index numbers of the final nodes on super_list to get the put payouts at the terminal nodes
// then we can work backwards to node 0,0 for euro and american put values.

function amountOfNodes(branchNumber) {

    var nodes = (branchNumber + 2) * ((branchNumber +1) / 2);

    return nodes
}

var totalNodes = amountOfNodes(bbranches);
totalNodes;

var totalNodesSecondToLastBranch = amountOfNodes(bbranches -1);
totalNodesSecondToLastBranch;

var totalNodesThirdToLastBranch = amountOfNodes(bbranches -2);
totalNodesThirdToLastBranch;


//


function putFinalNodePayOuts () {

    var count = 0;
    var iter = totalNodesSecondToLastBranch;
    var putFinalPayOutList = [];


    while (count <= bbranches){
        var putPayOut = strike - super_list[iter][2] ;
        var cleanPutPayOut = putPayOut.toFixed(8) * 1;
        if (cleanPutPayOut > 0){
            putFinalPayOutList.push(cleanPutPayOut);
            iter = iter + 1;
        }
        else{
            putFinalPayOutList.push(0);
            iter = iter + 1;
        }
        count = count + 1;
    }
    return putFinalPayOutList
}

var putFinalBranchPayOutList = putFinalNodePayOuts ();
putFinalBranchPayOutList;

////////////////////////////////////////////////////////////////////////


//#4

// creates an index list to make put values using p on up nodes and 1-p on down nodes from thirdToLastBranch to zero branch
// using backward induction.  dont need it for terminal branch and secondToLastBranch
// backward induction starts from the terminal branch. The second to last branch is easily genertated from the terminal branch.
// after that, there is problem generating each branch.  You need a child node to reference two parent nodes on the previous branch..
// on each branch, the index numbers of the parent nodes jumps by two instead of one.  So we need to create and index map
// so that each child references the correct parent nodes.
// this is easily done in python by going to the end of a list with:  list_name[-1].
// this could have been done in JS with :  array_name[array_name.length].....however I did it the long way with a map list bc
// I wasnt thinking clearly at the time

function mapPath () {

  var count = 0;
  var iter = 0;
  var gen = totalNodesThirdToLastBranch;
  var seq = (bbranches - 2) ;
  var mapList = [];
  var mapNum = 0;

  while (seq >= 0) {

    while (iter <= seq) {
      mapList.push(mapNum);
      if (iter < seq) {
        mapNum = mapNum + 1;
      }
      else{
        mapNum = mapNum + 2;
      }

      iter = iter + 1;
    }

    iter = 0;
    seq = seq -1;

  }

  return mapList

}

var parentList = mapPath () ;
parentList;


///////////////////////////////////////////////////////////////////////

//#5
// this will create the euro put value for each non-terminal node (second to last node to the 0,0 node)
// this is in the backward induction sequence
// fist while loop creates the second to last branch off of the terminal nodes and places the node values into an array
// within the function.  the array is putValueAtNode.
// once putValueAtNode is created, the second while loop is self replicating down to the 0,0 node.
// this is a very nice peice of code.


function putValueNonTerminalNodes3 (){

    var count = 0;
    var iter  = 0;
    var putValueAtNode = []

    while (count < bbranches){
      var pVal = pvFactor * ( (p * putFinalBranchPayOutList[count]) + ( (1-p) * putFinalBranchPayOutList[count+1] ) ) ;
      var cleanPVal = ( pVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPVal ) ;

      count = count + 1;

    }

    while (iter < totalNodesThirdToLastBranch){

      var putVal = pvFactor * ( (p * putValueAtNode[parentList[iter]]) + ( (1-p) * putValueAtNode[parentList[iter]+1] ) ) ;
      var cleanPutVal = ( putVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPutVal ) ;

      iter = iter + 1;


    }

    return putValueAtNode

}

var putValueAtEachNodeList3 = putValueNonTerminalNodes3 () ;
putValueAtEachNodeList3;


///////////////////////////////////////////////////////////////////////

//#6
//this combines putFinalBranchPayOutList with putValueAtEachNodeList3 to make euroPutValueAtEachNodeMaster
// this is in backward induction sequence
// last value in euroPutValueAtEachNodeMaster is euroPutValue

function putNodeMaster () {

  var count = 0;
  var iter = 0;
  var putNodeMasterList = [];
  var finalBranchLength = putFinalBranchPayOutList.length;
  var nonFinalBranchLength = putValueAtEachNodeList3.length;

  while (count < finalBranchLength){
    putNodeMasterList.push(putFinalBranchPayOutList[count]);
    count = count + 1
  }

  while (iter < nonFinalBranchLength) {
    putNodeMasterList.push(putValueAtEachNodeList3[iter]);
    iter = iter + 1;
  }

  return putNodeMasterList
}

var euroPutValueAtEachNodeMaster = putNodeMaster();
euroPutValueAtEachNodeMaster;

var euroPutValue = euroPutValueAtEachNodeMaster[euroPutValueAtEachNodeMaster.length-1];
euroPutValue;


//////////////////////////////////////////////////////////////////////////

//#7

// assembles euroPutValueAtEachNodeMaster into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// the first item of the resulting array is also the euro put value:  euroPutAtEachNodeListInSuperListSequence[0]
// this can be zipped to super_list


function reverseEuroPutBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = euroPutValueAtEachNodeMaster.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(euroPutValueAtEachNodeMaster[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var euroPutAtEachNodeListInSuperListSequence = reverseEuroPutBackwardInductionSequence ();
euroPutAtEachNodeListInSuperListSequence;



//////////////////////////////////////////////////////////////////////////

//#8
//  this creates a list of the put intrinsic value for all non-terminal nodes in the backward induction sequence
//  this can be compared to putValueAtEachNodeList3 to make a list for American Put Value which is in  backward induction sequence

function putIntrinsicBackwardInductionSequenceList_NonTerminalNodes () {

  var count = 0;
  var iter = 0;
  var putIntrinsicBackwardInductionNonTerminalList = []
  var num = putIntrinsicBackwardInductionSequenceList.length - (bbranches + 1 ) ;
  var indexIter = putIntrinsicBackwardInductionSequenceList.length - totalNodesSecondToLastBranch ;

  while (count < num){

    putIntrinsicBackwardInductionNonTerminalList.push( putIntrinsicBackwardInductionSequenceList[indexIter] );
    indexIter = indexIter + 1;
    count = count + 1;

  }
  return putIntrinsicBackwardInductionNonTerminalList
}

var putIntrinsicAtEachNodeBackwardInductionNonTerminalList = putIntrinsicBackwardInductionSequenceList_NonTerminalNodes ();
putIntrinsicAtEachNodeBackwardInductionNonTerminalList;

var putIntrinsicSecondToLastBranchNodesBackward_Slice = putIntrinsicAtEachNodeBackwardInductionNonTerminalList.slice(0,(bbranches));
putIntrinsicSecondToLastBranchNodesBackward_Slice;

var putIntrinsic_After_SecondToLastBranchNodesBackward_Slice = putIntrinsicAtEachNodeBackwardInductionNonTerminalList.slice((bbranches),(putIntrinsicAtEachNodeBackwardInductionNonTerminalList.length) );
putIntrinsic_After_SecondToLastBranchNodesBackward_Slice;


///////////////////////////////////////////////////////////////////////////////

//#9
// if intrinsic value of put is higher than euro put value on a particular node, then intrinsic value replaces euro value
// this is in backward induction sequence
// on that particular node

function americanPutBackwardInduction (){

    var count = 0;
    var iter  = 0;
    var putValueAtNode = [];


    while (count < bbranches){
      var pIntVal = putIntrinsicSecondToLastBranchNodesBackward_Slice[count];
      var pEuroVal = pvFactor * ( (p * putFinalBranchPayOutList[count]) + ( (1-p) * putFinalBranchPayOutList[count+1] ) ) ;


      if(pIntVal > pEuroVal){
        var pVal = pIntVal;

      }
      else{
        var pVal = pEuroVal;

      }


      var cleanPVal = ( pVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPVal ) ;

      count = count + 1;

    }





    while (iter < totalNodesThirdToLastBranch){

      var putIntVal = putIntrinsic_After_SecondToLastBranchNodesBackward_Slice[iter];

      var putEuroVal = pvFactor * ( (p * putValueAtNode[parentList[iter]]) + ( (1-p) * putValueAtNode[parentList[iter]+1] ) );


      if(putIntVal > putEuroVal){
        var putVal = putIntVal;
      }
      else{
        var putVal = putEuroVal;
      }


      var cleanPutVal = ( putVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPutVal ) ;

      iter = iter + 1;


    }

    return putValueAtNode

}

var americanPutValueAtEachNonTerminalNode = americanPutBackwardInduction () ;
americanPutValueAtEachNonTerminalNode;



///////////////////////////////////////////////////////////////////////////////

//#10

// assembles the full list of american put value on each node by combining putFinalBranchPayOutList with americanPutValueAtEachNonTerminalNode
// this is in backward induction sequence
// last item on the list americanPutAtEachNodeList is the americanPutValue

function americanPutValueAtEachNode (){

  var count = 0;
  var iter = 0;
  var americanPutValList = []

  while (count <= bbranches){

    americanPutValList.push(putFinalBranchPayOutList[count]);
    count = count + 1;

  }

  while (iter < totalNodesSecondToLastBranch){

    americanPutValList.push(americanPutValueAtEachNonTerminalNode[iter]);
    iter = iter + 1;

  }

  return americanPutValList

}

var americanPutAtEachNodeList = americanPutValueAtEachNode () ;
americanPutAtEachNodeList;

var americanPutValue = americanPutAtEachNodeList[americanPutAtEachNodeList.length-1];
americanPutValue;




///////////////////////////////////////////////////////////////////////////////

//#11

// assembles americanPutAtEachNodeList into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// the first item of the resulting array is also the american put value:  americanPutAtEachNodeListInSuperListSequence[0]
// this can be zipped to super_list



function reversePutBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = americanPutAtEachNodeList.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(americanPutAtEachNodeList[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var americanPutAtEachNodeListInSuperListSequence = reversePutBackwardInductionSequence ();
americanPutAtEachNodeListInSuperListSequence;


//////////////////////////////////////////////////////////////////////////////////////////

//#12
// if intrinsic value of put is higher than euro put value on a particular node, then "yes" is returned
// if it is the nodes on the final branch then "N/A" is returned bc this is the final payout (euro and american values are derived from the final payouts)
// therefore there is nothing to compare on the final branch
// this is in backward induction sequence

function putIntrinsicGreaterThanEuro (){

    var count = 0;
    var iter  = 0;
    var place = 0;
    var putValueAtNode = [];
    var intrinsicGreater = [];


    while (place <= bbranches){
      intrinsicGreater.push("N/A")
      place = place + 1;
    }



    while (count < bbranches){
      var pIntVal = putIntrinsicSecondToLastBranchNodesBackward_Slice[count];
      var pEuroVal = (p * putFinalBranchPayOutList[count]) + ( (1-p) * putFinalBranchPayOutList[count+1] ) ;


      if(pIntVal > pEuroVal){
        var pVal = pIntVal;
        intrinsicGreater.push("yes");

      }
      else{
        var pVal = pEuroVal;
        intrinsicGreater.push("no");

      }


      var cleanPVal = ( pVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPVal ) ;

      count = count + 1;

    }





    while (iter < totalNodesThirdToLastBranch){

      var putIntVal = putIntrinsic_After_SecondToLastBranchNodesBackward_Slice[iter];

      var putEuroVal = (p * putValueAtNode[parentList[iter]]) + ( (1-p) * putValueAtNode[parentList[iter]+1] );


      if(putIntVal > putEuroVal){
        var putVal = putIntVal;
        intrinsicGreater.push("yes");
      }
      else{
        var putVal = putEuroVal;
        intrinsicGreater.push("no");
      }


      var cleanPutVal = ( putVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPutVal ) ;

      iter = iter + 1;


    }

    return intrinsicGreater

}

var putIntrinsicGreaterThanEuroYesNo = putIntrinsicGreaterThanEuro () ;
putIntrinsicGreaterThanEuroYesNo;


//////////////////////////////////////////////////////////////////////

//#13

// assembles putIntrinsicGreaterThanEuroYesNo into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// this can be zipped to super_list



function reversePutIntrinsicVsEuroBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = putIntrinsicGreaterThanEuroYesNo.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(putIntrinsicGreaterThanEuroYesNo[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var putIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence = reversePutIntrinsicVsEuroBackwardInductionSequence ();
putIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence;


//////////////////////////////////////////////////////////////////////////////////////////



// FINAL WRAP UP OF INFO IN ARRAYS  ///
////////// ZIP UP TWO ///////////////

function zip_up5 (x,y,z,a,b,c,d,e,f,g,h,i){
  var iter1 = x.length - 1;
  child1 = []
  parent1 = []
  count = 0

  while (count <= iter1){

    child1.push(x[count])
    child1.push(y[count])
    child1.push(z[count])
    child1.push(a[count])
    child1.push(b[count])
    child1.push(c[count])
    child1.push(d[count])
    child1.push(e[count])
    child1.push(f[count])
    child1.push(g[count])
    child1.push(h[count])
    child1.push(i[count])


    parent1.push(child1)
    child1 = []
    count = count + 1

  }

  return parent1

}

//////////////// ZIP UP TWO ////////////////


var pxs = clean_all_stock_pxs_list;  ///// line 714 to 884 ////

var nL = nodeList(bbranches);      //// 681 to 699  /////

var bL = branchList(bbranches);      ////// 655 to 681  ////////

var euroCall = euroCallAtEachNodeListInSuperListSequence;

var euroPut = euroPutAtEachNodeListInSuperListSequence;

var americanCall = americanCallAtEachNodeListInSuperListSequence;

var cIntGrtEuro = callIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence;

var americanPut = americanPutAtEachNodeListInSuperListSequence;

var pIntGrtEuro = putIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence;

var divPerBranchOnEachNode = divBranchInfoForNode;      //// line 425 to 452 /////

var exDivStockPxPerBranchOnEachNode = exDivStockPxPerBranchForNode;    ///// line 462 to 486 ////

var branchEndDay = dayBranchEndsOn;      // line 79 to 104 //


var uber_list = zip_up5(bL,nL,pxs, euroCall, americanCall, cIntGrtEuro, euroPut, americanPut, pIntGrtEuro, divPerBranchOnEachNode, exDivStockPxPerBranchOnEachNode, branchEndDay );

uber_list;


//option values

//american call
function aCVOP () {
  if (daysToExpir <= 0){
    if ( (currStockPx - strike) > 0 ){
      var aCall = currStockPx - strike ;
    }
    else{
      var aCall = 0;
    }
  }
  else{
    var aCall = uber_list[0][4];
  }

  return aCall
}

var americanCallValueVega = aCVOP() ;
americanCallValueVega;

//american put
function aPVOP () {
  if (daysToExpir <= 0){
    if ( (strike - currStockPx) > 0 ){
      var aPut =  strike - currStockPx;
    }
    else{
      var aPut = 0;
    }
  }
  else{
    var aPut = uber_list[0][7];
  }

  return aPut
}

var americanPutValueVega = aPVOP() ;
americanPutValueVega;


//euro call
function eCVOP () {
  if (daysToExpir <= 0){
    if ( (currStockPx - strike) > 0 ){
      var eCall = currStockPx - strike ;
    }
    else{
      var eCall = 0;
    }
  }
  else{
    var eCall = uber_list[0][3];
  }

  return eCall
}

var euroCallValueVega = eCVOP() ;
euroCallValueVega;


//euro put
function ePVOP () {
  if (daysToExpir <= 0){
    if ( (strike - currStockPx) > 0 ){
      var ePut =  strike - currStockPx;
    }
    else{
      var ePut = 0;
    }
  }
  else{
    var ePut = uber_list[0][6];
  }

  return ePut
}

var euroPutValueVega = ePVOP() ;
euroPutValueVega;


//var americanCallValueVega = uber_list[0][4];
//var americanPutValueVega = uber_list[0][7];
//var euroCallValueVega = uber_list[0][3];
//var euroPutValueOutVega = uber_list[0][6];

var callVegaAmerican = americanCallValueVega - americanCallValueOutPut;
var putVegaAmerican =  americanPutValueVega - americanPutValueOutPut;


//option vegas
document.getElementById("americanCallVega").value = callVegaAmerican.toFixed(3);
document.getElementById("americanPutVega").value = putVegaAmerican.toFixed(3);














//////////// RHO /////////////////////

//START BINOMIAL

//////////////CLEAN STOCK PRICES //////////
////first creates an up_node list (highest price for each branch)//////
//need to make divsPerBranchList, exDivStockPxPerBranch, then current method to creat new up_node list with divs///

var currStockPx = wStockPx * 1;

var strike = wStrikePx * 1;
var daysToExpir = (wDaysToExpir) * 1;
var bbranches = wNumberOfBranches * 1;
var daysPerBranch = daysToExpir / bbranches;

var e = 2.718281828459045 ;

var vol =  ( wVol / 100) * 1  ;
var time = (daysToExpir / 365)  ;
var timePerBranch = (time / bbranches) ;
var u = e**( vol * ((time/bbranches)**0.5) );
var d = 1 / u ;
var r = ( (wRate / 100) * 1  ) + 0.01;
var rr = e**( r * timePerBranch) ;
var p = (rr-d)/(u-d) ;

var pvFactor = e**( r * timePerBranch * (-1) ) ;







var div1 = wDiv1 * 1;
var daysToDiv1Ex = wExDiv1Date * 1;
var divBranch1 = daysToDiv1Ex / daysPerBranch;
var cleanDivBranch1 = Math.ceil(divBranch1);

var div2 = wDiv2 * 1;
var daysToDiv2Ex = wExDiv2Date * 1;
var divBranch2 = daysToDiv2Ex / daysPerBranch;
var cleanDivBranch2 = Math.ceil(divBranch2);

var div3 = wDiv3 * 1;
var daysToDiv3Ex = wExDiv3Date * 1;
var divBranch3 = daysToDiv3Ex / daysPerBranch;
var cleanDivBranch3 = Math.ceil(divBranch3);

var div4 = wDiv4 * 1;
var daysToDiv4Ex = wExDiv4Date * 1;
var divBranch4 = daysToDiv4Ex / daysPerBranch;
var cleanDivBranch4 = Math.ceil(divBranch4);

var div5 = 0;
var daysToDiv5Ex = 300;
var divBranch5 = daysToDiv5Ex / daysPerBranch;
var cleanDivBranch5 = Math.ceil(divBranch5);

var div6 = 0;
var daysToDiv6Ex = 300;
var divBranch6 = daysToDiv6Ex / daysPerBranch;
var cleanDivBranch6 = Math.ceil(divBranch6);

var div7 = 0;
var daysToDiv7Ex = 542;
var divBranch7 = daysToDiv7Ex / daysPerBranch;
var cleanDivBranch7 = Math.ceil(divBranch7);

var div8 = 0;
var daysToDiv8Ex = 632;
var divBranch8 = daysToDiv8Ex / daysPerBranch;
var cleanDivBranch8 = Math.ceil(divBranch8);


var divInfo = [[1, cleanDivBranch1, div1],[2, cleanDivBranch2, div2],[3, cleanDivBranch3, div3],[4, cleanDivBranch4, div4],[5, cleanDivBranch5, div5],[6, cleanDivBranch6, div6],[7, cleanDivBranch7, div7],[8, cleanDivBranch8, div8]];

/////////////////////////////////////////////

// assembles list of when the branch starts in terms of days from now....now being day zero, or you could say time zero
// the number of items equals the number of branches.
// good to use to diplay below the branches and nodes on the website display

function siteDataForDaysFromNowForEachBranchStart (){

  var count = 0;
  var iter = 0;
  var startDay = [];

  while (count <= bbranches){

    var sd = daysPerBranch * count ;
    var cleanStartDay =  sd.toFixed(2) * 1 ;
    startDay.push( cleanStartDay);
    count = count + 1;

  }

  return startDay

}

var siteDataForDaysFromNowForEachBranchStartList = siteDataForDaysFromNowForEachBranchStart ();
siteDataForDaysFromNowForEachBranchStartList;

/////////////////////////////////////////////

// assembles the branch start days from now (now being day zero) for each nodes
// this can be zipped to super_list or uber_list


function daysFromNowForEachBranchEnd (){

  var count = 0;
  var iter = 0;
  var startDay = [];


  while (count <= bbranches){

    while ( iter <= count ){

      var sd = daysPerBranch * count ;
      var cleanStartDay =  sd.toFixed(2) * 1 ;
      startDay.push( cleanStartDay);
      iter = iter + 1;

    }

    iter = 0;
    count = count + 1;

  }

  return startDay

}

var dayBranchEndsOn = daysFromNowForEachBranchEnd ();
dayBranchEndsOn;


/////////////////////////////////////////////////////////////////////////cleans zero branch div to 1

function cleanDivInfoZeroBranchFilter (){
  var count = 0;
   var iter = 0;
  var cleanDivInfoZeroBranchFilterList = [];
  var divInfoLength = divInfo.length;

  while (count<=(divInfoLength-1)){
    if (divInfo[count][1]===0){
      cleanDivInfoZeroBranchFilterList.push([1,divInfo[count][2]]);
    }
    else{
      cleanDivInfoZeroBranchFilterList.push([divInfo[count][1],divInfo[count][2]]);
    }

    count = count + 1 ;

  }
  return cleanDivInfoZeroBranchFilterList
}

var cleanDivInfoNoZeroBranchDivList = cleanDivInfoZeroBranchFilter();

///////////////////////////////////////////////////////////////////////


function cleanDivInfoThird (){
  var count = 0;
  var iter = 0;
  var cleanDivInfoList = [];
  var divInfoLength = divInfo.length;

  while (count<divInfoLength){

    if (count === (divInfoLength -1) ){
      cleanDivInfoList.push([cleanDivInfoNoZeroBranchDivList[count][0],cleanDivInfoNoZeroBranchDivList[count][1]])
      count = count + 1
      // this statement fixes range prob on last div

    }



    else if ( (cleanDivInfoNoZeroBranchDivList[count][0]) === (cleanDivInfoNoZeroBranchDivList[count+1][0]) ) {

      var divX = (cleanDivInfoNoZeroBranchDivList[count][1] + cleanDivInfoNoZeroBranchDivList[count+1][1]);
      //on last div in list..this statement has a prob bc it goes out of range..so first statement was added

      cleanDivInfoList.push([cleanDivInfoNoZeroBranchDivList[count][0],divX]);

      count = count + 2

    }
    else{
      cleanDivInfoList.push([cleanDivInfoNoZeroBranchDivList[count][0],cleanDivInfoNoZeroBranchDivList[count][1]]);
      count = count + 1;
    }


  }



  return cleanDivInfoList

}

var cleanDivInfoThirdFilter = cleanDivInfoThird();



/////////////////////////////////////////////////////////////


function cleanDivInfoFour (){
  var count = 0;
  var iter = 0;
  var cleanDivInfoList = [];
  var divInfoLength = cleanDivInfoThirdFilter.length;

  while (count<divInfoLength){

    if (count === (divInfoLength -1) ){
      cleanDivInfoList.push([cleanDivInfoThirdFilter[count][0],cleanDivInfoThirdFilter[count][1]])
      count = count + 1

    }



    else if ( (cleanDivInfoThirdFilter[count][0]) === (cleanDivInfoThirdFilter[count+1][0]) ) {

      var divX = (cleanDivInfoThirdFilter[count][1] + cleanDivInfoThirdFilter[count+1][1]);

      cleanDivInfoList.push([cleanDivInfoThirdFilter[count][0],divX]);

      count = count + 2

    }
    else{
      cleanDivInfoList.push([cleanDivInfoThirdFilter[count][0],cleanDivInfoThirdFilter[count][1]]);
      count = count + 1;
    }


  }



  return cleanDivInfoList

}

var cleanDivInfoFourFilter = cleanDivInfoFour();



/////////////////////////////////////////////////////////////

function cleanDivInfoFive (){
  var count = 0;
  var iter = 0;
  var cleanDivInfoList = [];
  var divInfoLength = cleanDivInfoFourFilter.length;

  while (count<divInfoLength){

    if (count === (divInfoLength -1) ){
      cleanDivInfoList.push([cleanDivInfoFourFilter[count][0],cleanDivInfoFourFilter[count][1]])
      count = count + 1

    }



    else if ( (cleanDivInfoFourFilter[count][0]) === (cleanDivInfoFourFilter[count+1][0]) ) {

      var divX = (cleanDivInfoFourFilter[count][1] + cleanDivInfoFourFilter[count+1][1]);

      cleanDivInfoList.push([cleanDivInfoFourFilter[count][0],divX]);

      count = count + 2

    }
    else{
      cleanDivInfoList.push([cleanDivInfoFourFilter[count][0],cleanDivInfoFourFilter[count][1]]);
      count = count + 1;
    }


  }



  return cleanDivInfoList

}

var cleanDivInfoFiveFilter = cleanDivInfoFive();




//////////////////////////////////////////////////////////////


function scrubDivInfo () {

  cleanDivInfoNoZeroBranchDivList;
  cleanDivInfoThirdFilter;
  cleanDivInfoFourFilter;
  cleanDivInfoFiveFilter;

  return cleanDivInfoFiveFilter



}

var scrubbedDivList = scrubDivInfo();
scrubbedDivList;

/// !!!!!!!!!!!! more divs can be added..just need to add more filters...scrubNumber function will tell you how many filter you need...
/// !!!!!!!!!!!!  3-4 divs or less needs 2 filters, 5-8 divs needs 3 filters, 9-16 needs 4 filters, 17-32 needs 5 filters, 33-64 needs 6..
/// !!!!!!!!!!!!  it's filters needed is:   (Amount of Divs) / (2**Filters) , if there is a remainder then incread amount of filters by 1.

//////////////////////////////////////////////////////////////

function scrubNumber () {

  var count = 0;
  var iter = 0;
  var divInfoLength = divInfo.length;

  while ((2**count) < divInfoLength) {

    count = count + 1;
  }
  return count

}

var numberOfScrubs = scrubNumber()

/////////////////////////////////////////////////////////////


function divBones () {
  var count = 1;
  var divBonesList = [];

  while (count <= bbranches){
    divBonesList.push([count,0])
    count = count + 1;
  }
  return divBonesList
}

var divyBones = divBones()

divyBones;

/////////////////////////////////////////////////////////


function scrubbedDivListFinal () {
  var count = 0;
  var iter = scrubbedDivList.length;
  var scrubbedFinalList = [];

  while (count < (iter-1)) {

    if (scrubbedDivList[count][0] <= bbranches){

      scrubbedFinalList.push(scrubbedDivList[count]);

    }
    count = count + 1;
  }

  return scrubbedFinalList

}

var finalDivScrub = scrubbedDivListFinal ()

finalDivScrub;


////////////////////////////////////////////////////////

function divBranchInfo () {

  var count = 0;
  var iter = 0;
  var divBranchList = [];
  var maxIter = (finalDivScrub.length - 1)


  if (finalDivScrub.length === 0){
    divBranchList = divyBones;
  }
  else{

    while (count < (bbranches)){

      if (divyBones[count][0] === finalDivScrub[iter][0]){
        divBranchList.push(finalDivScrub[iter]);
        count = count +1;
        if (iter < maxIter) {
          iter = iter + 1;}

      }
      else{
        divBranchList.push(divyBones[count]);
        count = count + 1;
      }
    }

  }



  return divBranchList

}

var finalDivBranchList = divBranchInfo ();
finalDivBranchList;


/////////////////////////////////////////////////////////


function cumlaDiv (){
  var count = 0;
  var cumlative = 0;
  var iter = finalDivBranchList.length;
  var cumlaDivList = [];

  while (count < iter) {
    cumlative = cumlative + finalDivBranchList[count][1];
    cumlaDivList.push(cumlative);
    count = count + 1;

  }
  return cumlaDivList
}

var cumlativeDivPerBranch = cumlaDiv();
cumlativeDivPerBranch;


///////////////////////////////////////////////////////

function stockPxPerBranch () {
  var count = 0;
  var iter = cumlativeDivPerBranch.length;
  var stockPxExDiv = [currStockPx]

  while (count < iter) {

    stockPxExDiv.push(currStockPx - cumlativeDivPerBranch[count]);
    count = count + 1;

  }

  return stockPxExDiv

}

var stockPxExDivPerBranch = stockPxPerBranch ();
stockPxExDivPerBranch;

///////////////////////////////////////////////////////////////////

// takes the finalDivBranchList (which does not include div info on Zero Branch bc there cannot be an ex-div on the zero branch) and
// creates the div branch info for the nodes of each branch.....example: on the 5th Branch there will be 6 nodes.....
// what ever the div is on the 5th Branch (could be zero) it will create 6 items of the same number (the number being the div on that branch)
// can be zipped to super_list and uber_list


function divInfoForNode (){

  var count = 1;
  var iter = 0;
  var divNode = [0];


  while (count <= bbranches) {


    while (iter <= count){

      divNode.push(finalDivBranchList[count-1][1]) ;

      iter = iter + 1;

    }

    iter = 0;
    count = count + 1;

  }
  return divNode

}

var divBranchInfoForNode = divInfoForNode ();
divBranchInfoForNode;


////////////////////////////////////////////////////////////////

// takes the exDivStockPxPerBranch list (which includes the current stock px on branch zero)(there cannot be a ex-div or ex-div stock px
// on branch zero)....and makes an ex-div stock px for each node on that branch
// can be zipped to super_list and uber_list


function exDivStockPxforNode (){

  var count = 0;
  var iter = 0;
  var exDivNode = [];

  while (count <= bbranches){

    while (iter <= count){

      exDivNode.push( stockPxExDivPerBranch [count] );

      iter = iter + 1;
    }

    iter = 0;
    count = count + 1;
  }

  return exDivNode

}

var exDivStockPxPerBranchForNode = exDivStockPxforNode ();
exDivStockPxPerBranchForNode;



////////////////////////////////////////////////////////////////////

/// up nodes ////////

function up_node(){
  var last_up_px = bbranches;
  var exponent = 0;
  var iter = 0;
  var count = 0;
  var up_move = u;
  var up_list = [];

  while (iter <= last_up_px){
    up_list.push(stockPxExDivPerBranch[count]*(up_move**iter))
    count = count + 1
    iter = iter + 1 ;
  }

  return up_list

}

var up_node_pxs = up_node()

up_node_pxs;



/////builds rest of the nodes of each branch based on highest node//////
function all_stock_pxs (){

  var last_up_px = bbranches;
  var exponent = 0;
  var iter = 0;
  var count = 0;
  var up_move = u;
  var down_move = (1 / up_move);
  var node_down_increment = down_move / up_move
  var all_list = [];

  while (iter <= last_up_px){

    while (exponent <= iter){
      all_list.push(up_node_pxs[iter]*(node_down_increment**exponent));
      exponent = exponent + 1;
    }

    iter = iter + 1;
    exponent = 0;

  }

  return all_list

}


var raw_all_stock_pxs = all_stock_pxs();

raw_all_stock_pxs;


////rounds all the stock pxs at each node to two decmils///////

function clean_raw_all_stock_pxs (){

  var clean_all_stock_pxs = [];
  var count = 0;
  var clean_count = (raw_all_stock_pxs.length - 1);

  while (count <= clean_count){
    var scrub = ((raw_all_stock_pxs[count]).toFixed(8)) * 1 ;
    clean_all_stock_pxs.push(scrub);
    count = count + 1;

  }

  return clean_all_stock_pxs

}

var clean_all_stock_pxs_list = clean_raw_all_stock_pxs();
clean_all_stock_pxs_list;


//////////////////CLEAN STOCK PRICES ////////////////////


///////////////////////////  BRANCH LIST /////////////////////////////



function branchList(){

  var branch_number_list =[];
  var last_address = bbranches;
  var iter = 0;
  var count = 0;

  while(count<=last_address){
    while(iter<=last_address){
      branch_number_list.push(last_address);
      iter = iter + 1;
    }
    iter = 0;
    last_address = last_address -1;
  }


  return branch_number_list.reverse()
}

var branchListAll = branchList();
branchListAll;

///////////////////////////  BRANCH LIST /////////////////////////////



//////////////////////////// NODE LIST ///////////////////////////////

function nodeList(){

  var node_number_list =[];
  var last_address = bbranches;
  var iter = 0;
  var count = 0;

  while(count<=last_address){
    while(iter<=last_address){
      node_number_list.push(iter);
      iter = iter + 1;
    }
    iter = 0;
    last_address = last_address -1;
  }


  return node_number_list.reverse()
}

var nodeListAll = nodeList();
nodeListAll;


//////////////////////////// NODE LIST ///////////////////////////////


////////// ZIP UP ///////////////

function zip_up (x,y,z){
  var iter1 = x.length - 1;
  child1 = []
  parent1 = []
  count = 0

  while (count <= iter1){

    child1.push(x[count])
    child1.push(y[count])
    child1.push(z[count])

    parent1.push(child1)
    child1 = []
    count = count + 1

  }

  return parent1

}

//////////////// ZIP UP ////////////////


var pxs = clean_all_stock_pxs_list;  ///// line 714 to 884 ////

var nL = nodeList(bbranches);      //// 681 to 699  /////

var bL = branchList(bbranches);      ////// 655 to 681  ////////

var super_list = zip_up(bL,nL,pxs);          ///////// 933 to 955 /////////

super_list;


////////////////////////////////////////////////////
//Call Intrinsic Value List

function callIntrinsicValueAtEachNode () {

    var count = 0;
    var iter = 0;
    var callIntrinsic = [];

    while (count < super_list.length){
        var callIntrinsicValue = ( super_list[count][2] - strike );
        var cleanCallIntrinsicValue = callIntrinsicValue.toFixed(8) * 1;
        if (cleanCallIntrinsicValue > 0){
            callIntrinsic.push( cleanCallIntrinsicValue );
            count = count + 1;
        }
        else{
            callIntrinsic.push(0);
            count = count + 1;
        }


    }
    return callIntrinsic
}

var callIntrinsicAtEachNodeList = callIntrinsicValueAtEachNode () ;
callIntrinsicAtEachNodeList;
// this can be zipped to super_list bc its the same sequence

/////////////////////////////////////////////////////

function backwardInductionCallIntrinsicSequence () {

  var count = bbranches;
  var iter = bbranches;
  var place = bbranches + 1;
  var callIntrinsicBackwardInductionSequence = [];
  var num = callIntrinsicAtEachNodeList.length;

  while (count >= 0 ){

    while (iter >= 0 ){
      callIntrinsicBackwardInductionSequence.push(callIntrinsicAtEachNodeList[num-place]);
      iter = iter -1 ;
      place = place -1 ;

    }
    place = bbranches + 1;
    num = num - count;
    count = count -1 ;
    iter = count;


  }


  return callIntrinsicBackwardInductionSequence

}

var callIntrinsicBackwardInductionSequenceList = backwardInductionCallIntrinsicSequence () ;
callIntrinsicBackwardInductionSequenceList;

//the can be zipped to callValueAtEachNodeMaster which might be renamed to euroCallValueAtEachNode

////////////////////////////////////////////////////


// gets call payouts on final nodes


// isolates the index numbers of the final nodes on super_list

function amountOfNodes(branchNumber) {

    var nodes = (branchNumber + 2) * ((branchNumber +1) / 2);

    return nodes
}

var totalNodes = amountOfNodes(bbranches);
totalNodes;

var totalNodesSecondToLastBranch = amountOfNodes(bbranches -1);
totalNodesSecondToLastBranch;

var totalNodesThirdToLastBranch = amountOfNodes(bbranches -2);
totalNodesThirdToLastBranch;


//


function callFinalNodePayOuts () {

    var count = 0;
    var iter = totalNodesSecondToLastBranch;
    var callFinalPayOutList = [];


    while (count <= bbranches){
        var callPayOut = super_list[iter][2] - strike ;
        var cleanCallPayOut = callPayOut.toFixed(8) * 1;
        if (cleanCallPayOut > 0){
            callFinalPayOutList.push(cleanCallPayOut);
            iter = iter + 1;
        }
        else{
            callFinalPayOutList.push(0);
            iter = iter + 1;
        }
        count = count + 1;
    }
    return callFinalPayOutList
}

var callFinalBranchPayOutList = callFinalNodePayOuts ();
callFinalBranchPayOutList;

////////////////////////////////////////////////////////////////////////
// creates an index list to make call values using p on up nodes and 1-p on down nodes from thirdToLastBranch to zero branch
// using backward induction.  dont need it for terminal branch and secondToLastBranch

function mapPath () {

  var count = 0;
  var iter = 0;
  var gen = totalNodesThirdToLastBranch;
  var seq = (bbranches - 2) ;
  var mapList = [];
  var mapNum = 0;

  while (seq >= 0) {

    while (iter <= seq) {
      mapList.push(mapNum);
      if (iter < seq) {
        mapNum = mapNum + 1;
      }
      else{
        mapNum = mapNum + 2;
      }

      iter = iter + 1;
    }

    iter = 0;
    seq = seq -1;

  }

  return mapList

}

var parentList = mapPath () ;
parentList;


///////////////////////////////////////////////////////////////////////



function callValueNonTerminalNodes3 (){

    var count = 0;
    var iter  = 0;
    var callValueAtNode = []

    while (count < bbranches){
      var cVal = pvFactor * ( (p * callFinalBranchPayOutList[count]) + ( (1-p) * callFinalBranchPayOutList[count+1] ) ) ;
      var cleanCVal = ( cVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCVal ) ;

      count = count + 1;

    }

    while (iter < totalNodesThirdToLastBranch){

      var callVal = pvFactor * ( (p * callValueAtNode[parentList[iter]]) + ( (1-p) * callValueAtNode[parentList[iter]+1] ) );
      var cleanCallVal = ( callVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCallVal ) ;

      iter = iter + 1;


    }

    return callValueAtNode

}

var callValueAtEachNodeList3 = callValueNonTerminalNodes3 () ;
callValueAtEachNodeList3;








///////////////////////////////////////////////////////////////////////
//this combines callFinalBranchPayOutList with callValueAtEachNodeList3 to make euroCallValueAtEachNodeMaster
// last value in euroCallValueAtEachNodeMaster is euroCallValue

function callNodeMaster () {

  var count = 0;
  var iter = 0;
  var callNodeMasterList = [];
  var finalBranchLength = callFinalBranchPayOutList.length;
  var nonFinalBranchLength = callValueAtEachNodeList3.length;

  while (count < finalBranchLength){
    callNodeMasterList.push(callFinalBranchPayOutList[count]);
    count = count + 1
  }

  while (iter < nonFinalBranchLength) {
    callNodeMasterList.push(callValueAtEachNodeList3[iter]);
    iter = iter + 1;
  }

  return callNodeMasterList
}

var euroCallValueAtEachNodeMaster = callNodeMaster();
euroCallValueAtEachNodeMaster;

var euroCallValue = euroCallValueAtEachNodeMaster[euroCallValueAtEachNodeMaster.length-1];
euroCallValue;


/////////////////////////////////////////////////////////////////

// assembles euroCallValueAtEachNodeMaster into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// the first item of the resulting array is also the euro call value:  euroCallAtEachNodeListInSuperListSequence[0]
// this can be zipped to super_list


function reverseEuroCallBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = euroCallValueAtEachNodeMaster.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(euroCallValueAtEachNodeMaster[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var euroCallAtEachNodeListInSuperListSequence = reverseEuroCallBackwardInductionSequence ();
euroCallAtEachNodeListInSuperListSequence;



////////////////////////////////////////////////////////////////////////////
//  this creates a list of the call intrinsic value for all non-terminal nodes in the backward induction sequence
//  this can be compared to callValueAtEachNodeList3 to make a list for American Call Value using backward induction

function callIntrinsicBackwardInductionSequenceList_NonTerminalNodes () {

  var count = 0;
  var iter = 0;
  var callIntrinsicBackwardInductionNonTerminalList = []
  var num = callIntrinsicBackwardInductionSequenceList.length - (bbranches + 1 ) ;
  var indexIter = callIntrinsicBackwardInductionSequenceList.length - totalNodesSecondToLastBranch ;

  while (count < num){

    callIntrinsicBackwardInductionNonTerminalList.push( callIntrinsicBackwardInductionSequenceList[indexIter] );
    indexIter = indexIter + 1;
    count = count + 1;

  }
  return callIntrinsicBackwardInductionNonTerminalList
}

var callIntrinsicAtEachNodeBackwardInductionNonTerminalList = callIntrinsicBackwardInductionSequenceList_NonTerminalNodes ();
callIntrinsicAtEachNodeBackwardInductionNonTerminalList;

var callIntrinsicSecondToLastBranchNodesBackward_Slice = callIntrinsicAtEachNodeBackwardInductionNonTerminalList.slice(0,(bbranches));
callIntrinsicSecondToLastBranchNodesBackward_Slice;

var callIntrinsic_After_SecondToLastBranchNodesBackward_Slice = callIntrinsicAtEachNodeBackwardInductionNonTerminalList.slice((bbranches),(callIntrinsicAtEachNodeBackwardInductionNonTerminalList.length) );
callIntrinsic_After_SecondToLastBranchNodesBackward_Slice;


////////////////////////////////////////////////////////////////////////////
// if intrinsic value of call is higher than euro call value on a particular node, then intrinsic value replaces euro value
// on that particular node

function americanCallBackwardInduction (){

    var count = 0;
    var iter  = 0;
    var callValueAtNode = [];


    while (count < bbranches){
      var cIntVal = callIntrinsicSecondToLastBranchNodesBackward_Slice[count];
      var cEuroVal = pvFactor * ( (p * callFinalBranchPayOutList[count]) + ( (1-p) * callFinalBranchPayOutList[count+1] ) ) ;


      if(cIntVal > cEuroVal){
        var cVal = cIntVal;

      }
      else{
        var cVal = cEuroVal;

      }


      var cleanCVal = ( cVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCVal ) ;

      count = count + 1;

    }





    while (iter < totalNodesThirdToLastBranch){

      var callIntVal = callIntrinsic_After_SecondToLastBranchNodesBackward_Slice[iter];

      var callEuroVal = pvFactor * ( (p * callValueAtNode[parentList[iter]]) + ( (1-p) * callValueAtNode[parentList[iter]+1] ) );


      if(callIntVal > callEuroVal){
        var callVal = callIntVal;
      }
      else{
        var callVal = callEuroVal;
      }


      var cleanCallVal = ( callVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCallVal ) ;

      iter = iter + 1;


    }

    return callValueAtNode

}

var americanCallValueAtEachNonTerminalNode = americanCallBackwardInduction () ;
americanCallValueAtEachNonTerminalNode;

///////////////////////////////////////////
// assembles the full list of american call value on each node by combining callFinalBranchPayOutList with americanCallValueAtEachNonTerminalNode
// last item on the list americanCallAtEachNodeList is the americanCallValue

function americanCallValueAtEachNode (){

  var count = 0;
  var iter = 0;
  var americanCallValList = []

  while (count <= bbranches){

    americanCallValList.push(callFinalBranchPayOutList[count]);
    count = count + 1;

  }

  while (iter < totalNodesSecondToLastBranch){

    americanCallValList.push(americanCallValueAtEachNonTerminalNode[iter]);
    iter = iter + 1;

  }

  return americanCallValList

}

var americanCallAtEachNodeList = americanCallValueAtEachNode () ;
americanCallAtEachNodeList;

var americanCallValue = americanCallAtEachNodeList[americanCallAtEachNodeList.length-1];
americanCallValue;




////////////////////////////////////////////////////////////////////////////

//#11

// assembles americanCallAtEachNodeList into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// the first item of the resulting array is also the american put value:  americanCallAtEachNodeListInSuperListSequence[0]
// this can be zipped to super_list



function reverseCallBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = americanCallAtEachNodeList.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(americanCallAtEachNodeList[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var americanCallAtEachNodeListInSuperListSequence = reverseCallBackwardInductionSequence ();
americanCallAtEachNodeListInSuperListSequence;


//////////////////////////////////////////////////////////////////////////////////////////

//#12
// if intrinsic value of call is higher than euro call value on a particular node, then "yes" is returned
// if it is the nodes on the final branch then "N/A" is returned bc this is the final payout (euro and american values are derived from the final payouts)
// therefore there is nothing to compare on the final branch
// this is in backward induction sequence

function callIntrinsicGreaterThanEuro (){

    var count = 0;
    var iter  = 0;
    var place = 0;
    var callValueAtNode = [];
    var intrinsicGreater = [];


    while (place <= bbranches){
      intrinsicGreater.push("N/A")
      place = place + 1;
    }



    while (count < bbranches){
      var cIntVal = callIntrinsicSecondToLastBranchNodesBackward_Slice[count];
      var cEuroVal = (p * callFinalBranchPayOutList[count]) + ( (1-p) * callFinalBranchPayOutList[count+1] ) ;


      if(cIntVal > cEuroVal){
        var cVal = cIntVal;
        intrinsicGreater.push("yes");

      }
      else{
        var cVal = cEuroVal;
        intrinsicGreater.push("no");

      }


      var cleanCVal = ( cVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCVal ) ;

      count = count + 1;

    }





    while (iter < totalNodesThirdToLastBranch){

      var callIntVal = callIntrinsic_After_SecondToLastBranchNodesBackward_Slice[iter];

      var callEuroVal = (p * callValueAtNode[parentList[iter]]) + ( (1-p) * callValueAtNode[parentList[iter]+1] );


      if(callIntVal > callEuroVal){
        var callVal = callIntVal;
        intrinsicGreater.push("yes");
      }
      else{
        var callVal = callEuroVal;
        intrinsicGreater.push("no");
      }


      var cleanCallVal = ( callVal.toFixed(8) * 1 ) ;

      callValueAtNode.push( cleanCallVal ) ;

      iter = iter + 1;


    }

    return intrinsicGreater

}

var callIntrinsicGreaterThanEuroYesNo = callIntrinsicGreaterThanEuro () ;
callIntrinsicGreaterThanEuroYesNo;


////////////////////////////////////////////////////////////

//#13

// assembles callIntrinsicGreaterThanEuroYesNo into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// this can be zipped to super_list



function reverseCallIntrinsicVsEuroBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = callIntrinsicGreaterThanEuroYesNo.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(callIntrinsicGreaterThanEuroYesNo[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var callIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence = reverseCallIntrinsicVsEuroBackwardInductionSequence ();
callIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence;




//end of calls

//////////////////////////////////////////////////////////////////////////////////////////






//// PUTS  (start at line 606 to start copying functions for calls and turning into puts)
////////////////////////////////////////////////////

//#1
//Put Intrinsic Value List
// this is the put intrinsic value at each node to the ex-div stock px.  starts with (0,0), (1,0), (1,1), (2,0).....to terminal nodes
//so if a branch has a div assigned to it, then the stock px will drop by the price of the div.....that is the ex-div stock px.
// ref:  (super_list: line 600), (finalDivBranchList, line 371), (cumlativeDivPerBranch, line 393), (stockPxExDivPerBranch, line 415)
// this can be zipped to super_list bc its the same sequence


function putIntrinsicValueAtEachNode () {

    var count = 0;
    var iter = 0;
    var putIntrinsic = [];

    while (count < super_list.length){
        var putIntrinsicValue = ( strike - super_list[count][2] );
        var cleanPutIntrinsicValue = putIntrinsicValue.toFixed(8) * 1;
        if (cleanPutIntrinsicValue > 0){
            putIntrinsic.push( cleanPutIntrinsicValue );
            count = count + 1;
        }
        else{
            putIntrinsic.push(0);
            count = count + 1;
        }


    }
    return putIntrinsic
}

var putIntrinsicAtEachNodeList = putIntrinsicValueAtEachNode () ;
putIntrinsicAtEachNodeList;


/////////////////////////////////////////////////////////////////////////////

//#2
// this is the put intrinsic value at each node to the ex-div stock px, but it is in the backward induction sequence
// terminal nodes start first:  (terminal,0),(terminal,1),(terminal,2).....(2,0),(2,1),(2,2),(1,0),(1,1),(0,0)
// need this format to work backwards to the american value
//the can be zipped to euroPutValueAtEachNodeMaster, line ??.  The last item in euroPutValueAtEachNodeMaster is the euro put value.
//euroPutValueAtEachNodeMaster is in the backward induction sequence.


function backwardInductionPutIntrinsicSequence () {

  var count = bbranches;
  var iter = bbranches;
  var place = bbranches + 1;
  var putIntrinsicBackwardInductionSequence = [];
  var num = putIntrinsicAtEachNodeList.length;

  while (count >= 0 ){

    while (iter >= 0 ){
      putIntrinsicBackwardInductionSequence.push(putIntrinsicAtEachNodeList[num-place]);
      iter = iter -1 ;
      place = place -1 ;

    }
    place = bbranches + 1;
    num = num - count;
    count = count -1 ;
    iter = count;


  }


  return putIntrinsicBackwardInductionSequence

}

var putIntrinsicBackwardInductionSequenceList = backwardInductionPutIntrinsicSequence () ;
putIntrinsicBackwardInductionSequenceList;



////////////////////////////////////////////////////

//#3

// gets put payouts on final nodes


// isolates the index numbers of the final nodes on super_list to get the put payouts at the terminal nodes
// then we can work backwards to node 0,0 for euro and american put values.

function amountOfNodes(branchNumber) {

    var nodes = (branchNumber + 2) * ((branchNumber +1) / 2);

    return nodes
}

var totalNodes = amountOfNodes(bbranches);
totalNodes;

var totalNodesSecondToLastBranch = amountOfNodes(bbranches -1);
totalNodesSecondToLastBranch;

var totalNodesThirdToLastBranch = amountOfNodes(bbranches -2);
totalNodesThirdToLastBranch;


//


function putFinalNodePayOuts () {

    var count = 0;
    var iter = totalNodesSecondToLastBranch;
    var putFinalPayOutList = [];


    while (count <= bbranches){
        var putPayOut = strike - super_list[iter][2] ;
        var cleanPutPayOut = putPayOut.toFixed(8) * 1;
        if (cleanPutPayOut > 0){
            putFinalPayOutList.push(cleanPutPayOut);
            iter = iter + 1;
        }
        else{
            putFinalPayOutList.push(0);
            iter = iter + 1;
        }
        count = count + 1;
    }
    return putFinalPayOutList
}

var putFinalBranchPayOutList = putFinalNodePayOuts ();
putFinalBranchPayOutList;

////////////////////////////////////////////////////////////////////////


//#4

// creates an index list to make put values using p on up nodes and 1-p on down nodes from thirdToLastBranch to zero branch
// using backward induction.  dont need it for terminal branch and secondToLastBranch
// backward induction starts from the terminal branch. The second to last branch is easily genertated from the terminal branch.
// after that, there is problem generating each branch.  You need a child node to reference two parent nodes on the previous branch..
// on each branch, the index numbers of the parent nodes jumps by two instead of one.  So we need to create and index map
// so that each child references the correct parent nodes.
// this is easily done in python by going to the end of a list with:  list_name[-1].
// this could have been done in JS with :  array_name[array_name.length].....however I did it the long way with a map list bc
// I wasnt thinking clearly at the time

function mapPath () {

  var count = 0;
  var iter = 0;
  var gen = totalNodesThirdToLastBranch;
  var seq = (bbranches - 2) ;
  var mapList = [];
  var mapNum = 0;

  while (seq >= 0) {

    while (iter <= seq) {
      mapList.push(mapNum);
      if (iter < seq) {
        mapNum = mapNum + 1;
      }
      else{
        mapNum = mapNum + 2;
      }

      iter = iter + 1;
    }

    iter = 0;
    seq = seq -1;

  }

  return mapList

}

var parentList = mapPath () ;
parentList;


///////////////////////////////////////////////////////////////////////

//#5
// this will create the euro put value for each non-terminal node (second to last node to the 0,0 node)
// this is in the backward induction sequence
// fist while loop creates the second to last branch off of the terminal nodes and places the node values into an array
// within the function.  the array is putValueAtNode.
// once putValueAtNode is created, the second while loop is self replicating down to the 0,0 node.
// this is a very nice peice of code.


function putValueNonTerminalNodes3 (){

    var count = 0;
    var iter  = 0;
    var putValueAtNode = []

    while (count < bbranches){
      var pVal = pvFactor * ( (p * putFinalBranchPayOutList[count]) + ( (1-p) * putFinalBranchPayOutList[count+1] ) ) ;
      var cleanPVal = ( pVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPVal ) ;

      count = count + 1;

    }

    while (iter < totalNodesThirdToLastBranch){

      var putVal = pvFactor * ( (p * putValueAtNode[parentList[iter]]) + ( (1-p) * putValueAtNode[parentList[iter]+1] ) ) ;
      var cleanPutVal = ( putVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPutVal ) ;

      iter = iter + 1;


    }

    return putValueAtNode

}

var putValueAtEachNodeList3 = putValueNonTerminalNodes3 () ;
putValueAtEachNodeList3;


///////////////////////////////////////////////////////////////////////

//#6
//this combines putFinalBranchPayOutList with putValueAtEachNodeList3 to make euroPutValueAtEachNodeMaster
// this is in backward induction sequence
// last value in euroPutValueAtEachNodeMaster is euroPutValue

function putNodeMaster () {

  var count = 0;
  var iter = 0;
  var putNodeMasterList = [];
  var finalBranchLength = putFinalBranchPayOutList.length;
  var nonFinalBranchLength = putValueAtEachNodeList3.length;

  while (count < finalBranchLength){
    putNodeMasterList.push(putFinalBranchPayOutList[count]);
    count = count + 1
  }

  while (iter < nonFinalBranchLength) {
    putNodeMasterList.push(putValueAtEachNodeList3[iter]);
    iter = iter + 1;
  }

  return putNodeMasterList
}

var euroPutValueAtEachNodeMaster = putNodeMaster();
euroPutValueAtEachNodeMaster;

var euroPutValue = euroPutValueAtEachNodeMaster[euroPutValueAtEachNodeMaster.length-1];
euroPutValue;


//////////////////////////////////////////////////////////////////////////

//#7

// assembles euroPutValueAtEachNodeMaster into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// the first item of the resulting array is also the euro put value:  euroPutAtEachNodeListInSuperListSequence[0]
// this can be zipped to super_list


function reverseEuroPutBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = euroPutValueAtEachNodeMaster.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(euroPutValueAtEachNodeMaster[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var euroPutAtEachNodeListInSuperListSequence = reverseEuroPutBackwardInductionSequence ();
euroPutAtEachNodeListInSuperListSequence;



//////////////////////////////////////////////////////////////////////////

//#8
//  this creates a list of the put intrinsic value for all non-terminal nodes in the backward induction sequence
//  this can be compared to putValueAtEachNodeList3 to make a list for American Put Value which is in  backward induction sequence

function putIntrinsicBackwardInductionSequenceList_NonTerminalNodes () {

  var count = 0;
  var iter = 0;
  var putIntrinsicBackwardInductionNonTerminalList = []
  var num = putIntrinsicBackwardInductionSequenceList.length - (bbranches + 1 ) ;
  var indexIter = putIntrinsicBackwardInductionSequenceList.length - totalNodesSecondToLastBranch ;

  while (count < num){

    putIntrinsicBackwardInductionNonTerminalList.push( putIntrinsicBackwardInductionSequenceList[indexIter] );
    indexIter = indexIter + 1;
    count = count + 1;

  }
  return putIntrinsicBackwardInductionNonTerminalList
}

var putIntrinsicAtEachNodeBackwardInductionNonTerminalList = putIntrinsicBackwardInductionSequenceList_NonTerminalNodes ();
putIntrinsicAtEachNodeBackwardInductionNonTerminalList;

var putIntrinsicSecondToLastBranchNodesBackward_Slice = putIntrinsicAtEachNodeBackwardInductionNonTerminalList.slice(0,(bbranches));
putIntrinsicSecondToLastBranchNodesBackward_Slice;

var putIntrinsic_After_SecondToLastBranchNodesBackward_Slice = putIntrinsicAtEachNodeBackwardInductionNonTerminalList.slice((bbranches),(putIntrinsicAtEachNodeBackwardInductionNonTerminalList.length) );
putIntrinsic_After_SecondToLastBranchNodesBackward_Slice;


///////////////////////////////////////////////////////////////////////////////

//#9
// if intrinsic value of put is higher than euro put value on a particular node, then intrinsic value replaces euro value
// this is in backward induction sequence
// on that particular node

function americanPutBackwardInduction (){

    var count = 0;
    var iter  = 0;
    var putValueAtNode = [];


    while (count < bbranches){
      var pIntVal = putIntrinsicSecondToLastBranchNodesBackward_Slice[count];
      var pEuroVal = pvFactor * ( (p * putFinalBranchPayOutList[count]) + ( (1-p) * putFinalBranchPayOutList[count+1] ) ) ;


      if(pIntVal > pEuroVal){
        var pVal = pIntVal;

      }
      else{
        var pVal = pEuroVal;

      }


      var cleanPVal = ( pVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPVal ) ;

      count = count + 1;

    }





    while (iter < totalNodesThirdToLastBranch){

      var putIntVal = putIntrinsic_After_SecondToLastBranchNodesBackward_Slice[iter];

      var putEuroVal = pvFactor * ( (p * putValueAtNode[parentList[iter]]) + ( (1-p) * putValueAtNode[parentList[iter]+1] ) );


      if(putIntVal > putEuroVal){
        var putVal = putIntVal;
      }
      else{
        var putVal = putEuroVal;
      }


      var cleanPutVal = ( putVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPutVal ) ;

      iter = iter + 1;


    }

    return putValueAtNode

}

var americanPutValueAtEachNonTerminalNode = americanPutBackwardInduction () ;
americanPutValueAtEachNonTerminalNode;



///////////////////////////////////////////////////////////////////////////////

//#10

// assembles the full list of american put value on each node by combining putFinalBranchPayOutList with americanPutValueAtEachNonTerminalNode
// this is in backward induction sequence
// last item on the list americanPutAtEachNodeList is the americanPutValue

function americanPutValueAtEachNode (){

  var count = 0;
  var iter = 0;
  var americanPutValList = []

  while (count <= bbranches){

    americanPutValList.push(putFinalBranchPayOutList[count]);
    count = count + 1;

  }

  while (iter < totalNodesSecondToLastBranch){

    americanPutValList.push(americanPutValueAtEachNonTerminalNode[iter]);
    iter = iter + 1;

  }

  return americanPutValList

}

var americanPutAtEachNodeList = americanPutValueAtEachNode () ;
americanPutAtEachNodeList;

var americanPutValue = americanPutAtEachNodeList[americanPutAtEachNodeList.length-1];
americanPutValue;




///////////////////////////////////////////////////////////////////////////////

//#11

// assembles americanPutAtEachNodeList into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// the first item of the resulting array is also the american put value:  americanPutAtEachNodeListInSuperListSequence[0]
// this can be zipped to super_list



function reversePutBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = americanPutAtEachNodeList.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(americanPutAtEachNodeList[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var americanPutAtEachNodeListInSuperListSequence = reversePutBackwardInductionSequence ();
americanPutAtEachNodeListInSuperListSequence;


//////////////////////////////////////////////////////////////////////////////////////////

//#12
// if intrinsic value of put is higher than euro put value on a particular node, then "yes" is returned
// if it is the nodes on the final branch then "N/A" is returned bc this is the final payout (euro and american values are derived from the final payouts)
// therefore there is nothing to compare on the final branch
// this is in backward induction sequence

function putIntrinsicGreaterThanEuro (){

    var count = 0;
    var iter  = 0;
    var place = 0;
    var putValueAtNode = [];
    var intrinsicGreater = [];


    while (place <= bbranches){
      intrinsicGreater.push("N/A")
      place = place + 1;
    }



    while (count < bbranches){
      var pIntVal = putIntrinsicSecondToLastBranchNodesBackward_Slice[count];
      var pEuroVal = (p * putFinalBranchPayOutList[count]) + ( (1-p) * putFinalBranchPayOutList[count+1] ) ;


      if(pIntVal > pEuroVal){
        var pVal = pIntVal;
        intrinsicGreater.push("yes");

      }
      else{
        var pVal = pEuroVal;
        intrinsicGreater.push("no");

      }


      var cleanPVal = ( pVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPVal ) ;

      count = count + 1;

    }





    while (iter < totalNodesThirdToLastBranch){

      var putIntVal = putIntrinsic_After_SecondToLastBranchNodesBackward_Slice[iter];

      var putEuroVal = (p * putValueAtNode[parentList[iter]]) + ( (1-p) * putValueAtNode[parentList[iter]+1] );


      if(putIntVal > putEuroVal){
        var putVal = putIntVal;
        intrinsicGreater.push("yes");
      }
      else{
        var putVal = putEuroVal;
        intrinsicGreater.push("no");
      }


      var cleanPutVal = ( putVal.toFixed(8) * 1 ) ;

      putValueAtNode.push( cleanPutVal ) ;

      iter = iter + 1;


    }

    return intrinsicGreater

}

var putIntrinsicGreaterThanEuroYesNo = putIntrinsicGreaterThanEuro () ;
putIntrinsicGreaterThanEuroYesNo;


//////////////////////////////////////////////////////////////////////

//#13

// assembles putIntrinsicGreaterThanEuroYesNo into the normal sequence which I call the super_list sequence.
// it reverses the backward induction sequence.
// it's not a simple reversal bc in the backward induction sequence the branch order is a simple reversal but the nodes stay
// in normal order, so you need to isolate the indexing of each branch
// this can be zipped to super_list



function reversePutIntrinsicVsEuroBackwardInductionSequence () {

  var count = 0;
  var iter = 0;
  var place = 0;
  var base = putIntrinsicGreaterThanEuroYesNo.length;
  var sliceList = [];



    while (iter <= bbranches){

      while (place <= iter ){
        sliceList.push(putIntrinsicGreaterThanEuroYesNo[ base - amountOfNodes(iter) + place]);
        place = place + 1;
      }

      place = 0;
      iter = iter + 1;

    }

return sliceList

}

var putIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence = reversePutIntrinsicVsEuroBackwardInductionSequence ();
putIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence;


//////////////////////////////////////////////////////////////////////////////////////////



// FINAL WRAP UP OF INFO IN ARRAYS  ///
////////// ZIP UP TWO ///////////////

function zip_up5 (x,y,z,a,b,c,d,e,f,g,h,i){
  var iter1 = x.length - 1;
  child1 = []
  parent1 = []
  count = 0

  while (count <= iter1){

    child1.push(x[count])
    child1.push(y[count])
    child1.push(z[count])
    child1.push(a[count])
    child1.push(b[count])
    child1.push(c[count])
    child1.push(d[count])
    child1.push(e[count])
    child1.push(f[count])
    child1.push(g[count])
    child1.push(h[count])
    child1.push(i[count])


    parent1.push(child1)
    child1 = []
    count = count + 1

  }

  return parent1

}

//////////////// ZIP UP TWO ////////////////


var pxs = clean_all_stock_pxs_list;  ///// line 714 to 884 ////

var nL = nodeList(bbranches);      //// 681 to 699  /////

var bL = branchList(bbranches);      ////// 655 to 681  ////////

var euroCall = euroCallAtEachNodeListInSuperListSequence;

var euroPut = euroPutAtEachNodeListInSuperListSequence;

var americanCall = americanCallAtEachNodeListInSuperListSequence;

var cIntGrtEuro = callIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence;

var americanPut = americanPutAtEachNodeListInSuperListSequence;

var pIntGrtEuro = putIntrinsicGreaterThanEuroAtEachNodeListInSuperListSequence;

var divPerBranchOnEachNode = divBranchInfoForNode;      //// line 425 to 452 /////

var exDivStockPxPerBranchOnEachNode = exDivStockPxPerBranchForNode;    ///// line 462 to 486 ////

var branchEndDay = dayBranchEndsOn;      // line 79 to 104 //


var uber_list = zip_up5(bL,nL,pxs, euroCall, americanCall, cIntGrtEuro, euroPut, americanPut, pIntGrtEuro, divPerBranchOnEachNode, exDivStockPxPerBranchOnEachNode, branchEndDay );

uber_list;


//option values

//american call
function aCVOP () {
  if (daysToExpir <= 0){
    if ( (currStockPx - strike) > 0 ){
      var aCall = currStockPx - strike ;
    }
    else{
      var aCall = 0;
    }
  }
  else{
    var aCall = uber_list[0][4];
  }

  return aCall
}

var americanCallValueRho = aCVOP() ;
americanCallValueRho;

//american put
function aPVOP () {
  if (daysToExpir <= 0){
    if ( (strike - currStockPx) > 0 ){
      var aPut =  strike - currStockPx;
    }
    else{
      var aPut = 0;
    }
  }
  else{
    var aPut = uber_list[0][7];
  }

  return aPut
}

var americanPutValueRho = aPVOP() ;
americanPutValueRho;


//euro call
function eCVOP () {
  if (daysToExpir <= 0){
    if ( (currStockPx - strike) > 0 ){
      var eCall = currStockPx - strike ;
    }
    else{
      var eCall = 0;
    }
  }
  else{
    var eCall = uber_list[0][3];
  }

  return eCall
}

var euroCallValueRho = eCVOP() ;
euroCallValueRho;


//euro put
function ePVOP () {
  if (daysToExpir <= 0){
    if ( (strike - currStockPx) > 0 ){
      var ePut =  strike - currStockPx;
    }
    else{
      var ePut = 0;
    }
  }
  else{
    var ePut = uber_list[0][6];
  }

  return ePut
}

var euroPutValueRho = ePVOP() ;
euroPutValueRho;



//var americanCallValueRho = uber_list[0][4];
//var americanPutValueRho = uber_list[0][7];
//var euroCallValueRho = uber_list[0][3];
//var euroPutValueOutRho = uber_list[0][6];

var callRhoAmerican = americanCallValueRho - americanCallValueOutPut;
var putRhoAmerican =  americanPutValueRho - americanPutValueOutPut;


//option rho
document.getElementById("americanCallRho").value = callRhoAmerican.toFixed(3);
document.getElementById("americanPutRho").value = putRhoAmerican.toFixed(3);


// tree
//var zeroZeroStockPx = uber_list[0][2];
//document.getElementById("zero-zero").value = zeroZeroStockPx;
var emptyNode = "";

document.getElementById("zero-zero").value = uber_list[0][2];


if (bbranches >= 1){

  document.getElementById("one-one").value = uber_list[1][2];
  document.getElementById("one-zero").value = uber_list[2][2];

}
else{

  document.getElementById("one-one").value = emptyNode;
  document.getElementById("one-zero").value = emptyNode;
}




if (bbranches >= 2){

  document.getElementById("two-two").value = uber_list[3][2];
  document.getElementById("two-one").value = uber_list[4][2];
  document.getElementById("two-zero").value = uber_list[5][2];

}
else{

  document.getElementById("two-two").value = emptyNode;
  document.getElementById("two-one").value = emptyNode;
  document.getElementById("two-zero").value = emptyNode;
}




if (bbranches >= 3){

  document.getElementById("three-three").value = uber_list[6][2];
  document.getElementById("three-two").value = uber_list[7][2];
  document.getElementById("three-one").value = uber_list[8][2];
  document.getElementById("three-zero").value = uber_list[9][2];
}
else{

  document.getElementById("three-three").value = emptyNode;
  document.getElementById("three-two").value = emptyNode;
  document.getElementById("three-one").value = emptyNode;
  document.getElementById("three-zero").value = emptyNode;
}




if (bbranches >= 4){

  document.getElementById("four-four").value = uber_list[10][2];
  document.getElementById("four-three").value = uber_list[11][2];
  document.getElementById("four-two").value = uber_list[12][2];
  document.getElementById("four-one").value = uber_list[13][2];
  document.getElementById("four-zero").value = uber_list[14][2];

}
else{

  document.getElementById("four-four").value = emptyNode;
  document.getElementById("four-three").value = emptyNode;
  document.getElementById("four-two").value = emptyNode;
  document.getElementById("four-one").value = emptyNode;
  document.getElementById("four-zero").value = emptyNode;

}



if (bbranches >= 5){

  document.getElementById("five-five").value = uber_list[15][2];
  document.getElementById("five-four").value = uber_list[16][2];
  document.getElementById("five-three").value = uber_list[17][2];
  document.getElementById("five-two").value = uber_list[18][2];
  document.getElementById("five-one").value = uber_list[19][2];
  document.getElementById("five-zero").value = uber_list[20][2];
}
else{
  document.getElementById("five-five").value = emptyNode;
  document.getElementById("five-four").value = emptyNode;
  document.getElementById("five-three").value = emptyNode;
  document.getElementById("five-two").value = emptyNode;
  document.getElementById("five-one").value = emptyNode;
  document.getElementById("five-zero").value = emptyNode;
}




if (bbranches >= 6){

  document.getElementById("six-six").value = uber_list[21][2];
  document.getElementById("six-five").value = uber_list[22][2];
  document.getElementById("six-four").value = uber_list[23][2];
  document.getElementById("six-three").value = uber_list[24][2];
  document.getElementById("six-two").value = uber_list[25][2];
  document.getElementById("six-one").value = uber_list[26][2];
  document.getElementById("six-zero").value = uber_list[27][2];
}
else{
  document.getElementById("six-six").value = emptyNode;
  document.getElementById("six-five").value = emptyNode;
  document.getElementById("six-four").value = emptyNode;
  document.getElementById("six-three").value = emptyNode;
  document.getElementById("six-two").value = emptyNode;
  document.getElementById("six-one").value = emptyNode;
  document.getElementById("six-zero").value = emptyNode;
}




if (bbranches >= 7){

  document.getElementById("seven-seven").value = uber_list[28][2];
  document.getElementById("seven-six").value = uber_list[29][2];
  document.getElementById("seven-five").value = uber_list[30][2];
  document.getElementById("seven-four").value = uber_list[31][2];
  document.getElementById("seven-three").value = uber_list[32][2];
  document.getElementById("seven-two").value = uber_list[33][2];
  document.getElementById("seven-one").value = uber_list[34][2];
  document.getElementById("seven-zero").value = uber_list[35][2];
}
else{

  document.getElementById("seven-seven").value = emptyNode;
  document.getElementById("seven-six").value = emptyNode;
  document.getElementById("seven-five").value = emptyNode;
  document.getElementById("seven-four").value = emptyNode;
  document.getElementById("seven-three").value = emptyNode;
  document.getElementById("seven-two").value = emptyNode;
  document.getElementById("seven-one").value = emptyNode;
  document.getElementById("seven-zero").value = emptyNode;
}



if (bbranches >= 8){

  document.getElementById("eight-eight").value = uber_list[36][2];
  document.getElementById("eight-seven").value = uber_list[37][2];
  document.getElementById("eight-six").value = uber_list[38][2];
  document.getElementById("eight-five").value = uber_list[39][2];
  document.getElementById("eight-four").value = uber_list[40][2];
  document.getElementById("eight-three").value = uber_list[41][2];
  document.getElementById("eight-two").value = uber_list[42][2];
  document.getElementById("eight-one").value = uber_list[43][2];
  document.getElementById("eight-zero").value = uber_list[44][2];
}
else{

  document.getElementById("eight-eight").value = emptyNode;
  document.getElementById("eight-seven").value = emptyNode;
  document.getElementById("eight-six").value = emptyNode;
  document.getElementById("eight-five").value = emptyNode;
  document.getElementById("eight-four").value = emptyNode;
  document.getElementById("eight-three").value = emptyNode;
  document.getElementById("eight-two").value = emptyNode;
  document.getElementById("eight-one").value = emptyNode;
  document.getElementById("eight-zero").value = emptyNode;
}



if (bbranches >= 9){

  document.getElementById("nine-nine").value = uber_list[45][2];
  document.getElementById("nine-eight").value = uber_list[46][2];
  document.getElementById("nine-seven").value = uber_list[47][2];
  document.getElementById("nine-six").value = uber_list[48][2];
  document.getElementById("nine-five").value = uber_list[49][2];
  document.getElementById("nine-four").value = uber_list[50][2];
  document.getElementById("nine-three").value = uber_list[51][2];
  document.getElementById("nine-two").value = uber_list[52][2];
  document.getElementById("nine-one").value = uber_list[53][2];
  document.getElementById("nine-zero").value = uber_list[54][2];
}
else{

  document.getElementById("nine-nine").value = emptyNode;
  document.getElementById("nine-eight").value = emptyNode;
  document.getElementById("nine-seven").value = emptyNode;
  document.getElementById("nine-six").value = emptyNode;
  document.getElementById("nine-five").value = emptyNode;
  document.getElementById("nine-four").value = emptyNode;
  document.getElementById("nine-three").value = emptyNode;
  document.getElementById("nine-two").value = emptyNode;
  document.getElementById("nine-one").value = emptyNode;
  document.getElementById("nine-zero").value = emptyNode;
}


if (bbranches >= 10){

  document.getElementById("ten-ten").value = uber_list[55][2];
  document.getElementById("ten-nine").value = uber_list[56][2];
  document.getElementById("ten-eight").value = uber_list[57][2];
  document.getElementById("ten-seven").value = uber_list[58][2];
  document.getElementById("ten-six").value = uber_list[59][2];
  document.getElementById("ten-five").value = uber_list[60][2];
  document.getElementById("ten-four").value = uber_list[61][2];
  document.getElementById("ten-three").value = uber_list[62][2];
  document.getElementById("ten-two").value = uber_list[63][2];
  document.getElementById("ten-one").value = uber_list[64][2];
  document.getElementById("ten-zero").value = uber_list[65][2];

}
else{
  document.getElementById("ten-ten").value = emptyNode;
  document.getElementById("ten-nine").value = emptyNode;
  document.getElementById("ten-eight").value = emptyNode;
  document.getElementById("ten-seven").value = emptyNode;
  document.getElementById("ten-six").value = emptyNode;
  document.getElementById("ten-five").value = emptyNode;
  document.getElementById("ten-four").value = emptyNode;
  document.getElementById("ten-three").value = emptyNode;
  document.getElementById("ten-two").value = emptyNode;
  document.getElementById("ten-one").value = emptyNode;
  document.getElementById("ten-zero").value = emptyNode;
}









}
