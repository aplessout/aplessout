function clipp(){
    //var pest = navigator.clipboard.readText();
    //console.log(pest);
    navigator.clipboard.readText().then(
        clipText => document.getElementById("inputText").innerHTML = clipText);
}







function AIO(){
 var textInput = document.getElementById("inputText").value;
 var array = textInput.split(/\r?\n/);

 if (array[3][1] == 1) {
        US1();
}   else if (array[3][1] !== 1 && array[3][1] !== "m") {
        MX();
}	else if (array[3][1] == "m") {
        if (array[4][1] == 1){
        	US2();
        } else if (array[4][1] !== 1){
        	MX2();
        }
}
}

function US1(){
 var textInput = document.getElementById("inputText").value;
 var array = textInput.split(/\r?\n/);
    var a = array[0];
    var aa = a.split(" ");
    var b = array[2].split(" ")[0];
    var bb = b.split("@")[0]; 
    var c = array[3];
    var d = c.replace("+", "");
    var e = d.replace("1", "");
    var ee = e.replace(" ", "");
    var f = e.replace(" ", "");
    var g = f.replace("(", "");
    var h = g.replace(")", "");
    var ii = h.replace(" ", "-");
    var j = ii.replace("-", "");
    var k = j.replace("-", "");
    var plus = "%2B";
    console.log(d[0]);


    var fb = "";
    var i;
for (i = 0; i < aa.length; i++) {
    fb += aa[i] + "%20";
}
    fb = fb.substring(0, fb.length - 3);
    
    
      var tw = "";
for (i = 0; i < aa.length; i++) {
    tw += aa[i] + "+";
}
    tw = tw.substring(0, tw.length - 1) + "&f=user";  
    
    
    
    
    var CODE = [k[0],k[1],k[2]];
    var areaCODE = CODE.join().split(",").join("");
    
    var dir = {201:"New Jersey", 202:"District of Columbia", 203:"Connecticut", 205:"Alabama", 206:"Washington", 207:"Maine", 208:"Idaho", 986:"Idaho", 209:"California", 210:"Texas", 212:"New York", 213:"California", 214:"Texas", 215:"Pennsylvania", 216:"Ohio", 217:"Illinois", 218:"Minnesota", 219:"Indiana", 224:"Illinois", 225:"Louisiana", 228:"Mississippi", 229:"Georgia", 231:"Michigan", 234:"Ohio", 239:"Florida", 240:"Maryland", 248:"Michigan", 251:"Alabama", 252:"North Carolina", 253:"Washington", 254:"Texas", 256:"Alabama", 260:"Indiana", 262:"Wisconsin", 267:"Pennsylvania", 269:"Michigan", 270:"Kentucky", 276:"Virginia", 281:"Texas", 283:"Ohio", 301:"Maryland", 302:"Delaware", 303:"Colorado", 304:"West Virginia", 305:"Florida", 307:"Wyoming", 308:"Nebraska", 309:"Illinois", 310:"California", 312:"Illinois", 313:"Michigan", 314:"Missouri", 315:"New York", 316:"Kansas", 317:"Indiana", 318:"Louisiana", 319:"Iowa", 320:"Minnesota", 321:"Florida", 323:"California", 325:"Texas", 330:"Ohio", 331:"Illinois", 334:"Alabama", 336:"North Carolina", 337:"Louisiana", 339:"Massachusetts", 340:"US Virgin Islands", 341:"California", 347:"New York", 351:"Massachusetts", 352:"Florida", 360:"Washington", 361:"Texas", 369:"California", 380:"Ohio", 385:"Utah", 386:"Florida", 401:"Rhode Island", 402:"Nebraska", 404:"Georgia", 405:"Oklahoma", 406:"Montana", 407:"Florida", 408:"California", 409:"Texas", 410 :"Maryland", 412:"Pennsylvania", 413:"Massachusetts", 414:"Wisconsin", 415:"California", 417:"Missouri", 419:"Ohio", 423:"Tennessee", 424:"California", 425:"Washington", 430:"Texas", 432:"Texas", 434:"Virginia", 435:"Utah", 440:"Ohio", 442:"California", 443:"Maryland", 464:"Illinois", 469:"Texas", 470:"Georgia", 475:"Connecticut", 478:"Georgia", 479:"Arkansas", 480:"Arizona", 484:"Pennsylvania", 501:"Arkansas", 502:"Kentucky", 503:"Oregon", 504:"Louisiana", 505:"New Mexico", 507:"Minnesota", 508:"Massachusetts", 509:"Washington", 510:"California", 512:"Texas", 513:"Ohio", 515:"Iowa", 516:"New York", 517:"Michigan", 518:"New York", 520:"Arizona", 530:"California", 539:"Oklahoma", 540:"Virginia", 541:"Oregon", 551:"New Jersey", 557:"Missouri", 559:"California", 561:"Florida", 562:"California", 563:"Iowa", 564:"Washington", 567:"Ohio", 570:"Pennsylvania", 571:"Virginia", 573:"Missouri", 574:"Indiana", 575:"New Mexico", 580:"Oklahoma", 585:"New York", 586:"Michigan", 601:"Mississippi", 602:"Arizona", 603:"New Hampshire", 605:"South Dakota", 606:"Kentucky", 607:"New York", 608:"Wisconsin", 609:"New Jersey", 610:"Pennsylvania", 612:"Minnesota", 614:"Ohio", 615:"Tennessee", 616:"Michigan", 617:"Massachusetts", 618:"Illinois", 619:"California", 620:"Kansas", 623:"Arizona", 626:"California", 627:"California", 628:"California", 630:"Illinois", 631:"New York", 680:"New York", 636:"Missouri", 641:"Iowa", 646:"New York", 650:"California", 651:"Minnesota", 657:"California", 660:"Missouri", 661:"California", 662:"Mississippi", 669:"California", 670:"Northern Mariana Islands", 671:"Guam", 678:"Georgia", 679:"Michigan", 681:"West Virginia", 682:"Texas", 689:"Florida", 701:"North Dakota", 702:"Nevada", 703:"Virginia", 704:"North Carolina", 706:"Georgia", 707:"California", 708:"Illinois", 712:"Iowa", 713:"Texas", 714:"California", 715:"Wisconsin", 716:"New York",332:"New York", 717:"Pennsylvania", 718:"New York", 719:"Colorado", 720:"Colorado", 724:"Pennsylvania", 727:"Florida", 731:"Tennessee", 732:"New Jersey", 640:"New Jersey", 734:"Michigan", 737:"Texas", 740:"Ohio", 747:"California", 754:"Florida", 757:"Virginia", 760:"California", 762:"Georgia", 763:"Minnesota", 764:"California", 765:"Indiana", 769:"Mississippi", 770:"Georgia", 772:"Florida", 773:"Illinois", 774:"Massachusetts", 775:"Nevada", 779:"Illinois", 781:"Massachusetts", 785:"Kansas", 786:"Florida", 787:"Puerto Rico", 801:"Utah", 802:"Vermont", 803:"South Carolina", 804:"Virginia", 805:"California", 806:"Texas", 808:"Hawaii", 810:"Michigan", 812:"Indiana", 463:"Indiana", 930:"Indiana", 813:"Florida", 814:"Pennsylvania", 815:"Illinois", 816:"Missouri", 817:"Texas", 818:"California", 828:"North Carolina", 830:"Texas", 831:"California", 832:"Texas", 835:"Pennsylvania", 843:"South Carolina", 845:"New York", 847:"Illinois", 848:"New Jersey", 850:"Florida", 856:"New Jersey", 857:"Massachusetts", 858:"California", 859:"Kentucky", 860:"Connecticut", 862:"New Jersey", 863:"Florida", 864:"South Carolina", 865:"Tennessee", 870:"Arkansas", 872:"Illinois", 878:"Pennsylvania", 901:"Tennessee", 903:"Texas", 904:"Florida", 906:"Michigan", 907:"Alaska", 908:"New Jersey", 909:"California", 910:"North Carolina", 912:"Georgia", 913:"Kansas", 914:"New York", 915:"Texas", 916:"California", 917:"New York", 918:"Oklahoma", 919:"North Carolina", 920:"Wisconsin", 925:"California", 927:"Florida", 928:"Arizona", 931:"Tennessee", 935:"California", 936:"Texas", 937:"Ohio", 939:"Puerto Rico", 940:"Texas", 941:"Florida", 947:"Michigan", 949:"California", 951:"California", 952:"Minnesota", 954:"Florida", 956:"Texas", 957:"New Mexico", 959:"Connecticut", 970:"Colorado", 971:"Oregon", 972:"Texas", 973:"New Jersey", 975:"Missouri", 978:"Massachusetts", 979:"Texas", 980:"North Carolina", 984:"North Carolina", 985:"Louisiana", 989:"Michigan", 123:"Junagadh", 279:"california",938:"Alabama", 659: "Alabama", 849: "Dominican Republic", 829: "Dominican Republic", 809: "Dominican Republic", 876:"Jamaica", 658:"Jamaica", 364:"Kentucky", 667:"Maryland", 838:"New York", 934:"New York", 929:"New York", 743:"North Carolina", 220:"Ohio", 458:"Oregon", 445:"Pennsylvania", 272:"Pennsylvania", 223:"Pennsylvania", 721:"Sint Maarten", 839:"South Carolina", 854:"South Carolina", 869:"St. Kitts+%26+Nevis", 758:"St. Lucia", 784:"St. Vincent+%26+the Grenadines", 629:"Tennessee", 726:"Texas", 346:"Texas", 868:"Trinidad+%26+Tobago",649:"Turks+%26+Caicos", 534:"Wisconsin", 403:"Alberta", 587:"Alberta", 825:"Alberta", 780:"Alberta", 250:"British Columbia", 778:"British Columbia", 236:"British Columbia", 672:"British Columbia", 604:"British Columbia", 204:"Manitoba", 431:"Manitoba", 506:"New Brunswick", 709:"Newfoundland" , 867:"Northwest Territories", 902:"Nova Scotia", 782:"Nova Scotia AND Prince Edward Island", 416:"Ontario", 647:"Ontario", 437:"Ontario", 519:"Ontario", 226:"Ontario", 548:"Ontario", 613:"Ontario", 343:"Ontario", 705:"Ontario", 249:"Ontario", 807:"Ontario", 905:"Ontario", 289:"Ontario", 365:"Ontario", 418:"Quebec", 581:"Quebec", 367:"Quebec", 450:"Quebec", 579:"Quebec", 514:"Quebec", 438:"Quebec", 819:"Quebec", 873:"Quebec", 306:"Saskatchewan", 639:"Saskatchewan", 345:"Cayman Islands", 767:"Commonwealth of Dominica", 473:"Grenada", 664:"Montserrat", 531:"Nebraska", 725:"Nevada"}; // Trinidad & Tobago, Turks & Caicos, St. Vincent & the Grenadines, St. Lucia
    
    var loc = dir[areaCODE];
    
    var dummy = document.createElement("input");
document.body.appendChild(dummy);
dummy.setAttribute("id", "dummy_id");
dummy.setAttribute('value', a)
dummy.select();
document.execCommand("copy");
document.body.removeChild(dummy);
    
window.open("https://www.google.com/search?q=" + a);
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + loc);
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + ee);
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + "party");
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + "Facebook");
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + "Instagram");
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + "Twitter");
window.open('https://www.google.com/search?q="' + ee + '"');
window.open('https://www.google.com/search?q="' + ii + '"');
window.open('https://www.google.com/search?q="' + k + '"');
window.open('https://www.google.com/search?q="' + ee + '"' + "+" + plus + "+" + "party");
window.open('https://www.google.com/search?q="' + b + '"');
window.open('https://www.google.com/search?q="' + bb + '"');
window.open('https://www.google.com/search?q="' + b + '"' + "+" + plus + "+" + "party");
window.open("https://www.facebook.com/search/top?q=" + fb);
window.open("https://www.facebook.com/search/top?q=" + fb + "%2C%20" + loc);          
window.open("https://www.instagram.com/" + bb + "/");
window.open("https://www.twitter.com/search?q=" + tw);    
document.getElementById("inputText").value = "";
}


function US2(){
 var textInput = document.getElementById("inputText").value;
 var array = textInput.split(/\r?\n/);
    var a = array[0];
    var aa = a.split(" ");
    var b = array[2].split(" ")[0];
    var bb = b.split("@")[0]; 
    var c = array[4];
    var d = c.replace("+", "");
    var e = d.replace("1", "");
    var ee = e.replace(" ", "");
    var f = e.replace(" ", "");
    var g = f.replace("(", "");
    var h = g.replace(")", "");
    var ii = h.replace(" ", "-");
    var j = ii.replace("-", "");
    var k = j.replace("-", "");
    var plus = "%2B";
    
    var fb = "";
    var i;
for (i = 0; i < aa.length; i++) {
    fb += aa[i] + "%20";
}
    fb = fb.substring(0, fb.length - 3);
    
    
        var tw = "";
for (i = 0; i < aa.length; i++) {
    tw += aa[i] + "+";
}
    tw = tw.substring(0, tw.length - 1) + "&f=user";
    
    
    var CODE = [k[0],k[1],k[2]];
    var areaCODE = CODE.join().split(",").join("");
    
    var dir = {201:"New Jersey", 202:"District of Columbia", 203:"Connecticut", 205:"Alabama", 206:"Washington", 207:"Maine", 208:"Idaho", 986:"Idaho", 209:"California", 210:"Texas", 212:"New York", 213:"California", 214:"Texas", 215:"Pennsylvania", 216:"Ohio", 217:"Illinois", 218:"Minnesota", 219:"Indiana", 224:"Illinois", 225:"Louisiana", 228:"Mississippi", 229:"Georgia", 231:"Michigan", 234:"Ohio", 239:"Florida", 240:"Maryland", 248:"Michigan", 251:"Alabama", 252:"North Carolina", 253:"Washington", 254:"Texas", 256:"Alabama", 260:"Indiana", 262:"Wisconsin", 267:"Pennsylvania", 269:"Michigan", 270:"Kentucky", 276:"Virginia", 281:"Texas", 283:"Ohio", 301:"Maryland", 302:"Delaware", 303:"Colorado", 304:"West Virginia", 305:"Florida", 307:"Wyoming", 308:"Nebraska", 309:"Illinois", 310:"California", 312:"Illinois", 313:"Michigan", 314:"Missouri", 315:"New York", 316:"Kansas", 317:"Indiana", 318:"Louisiana", 319:"Iowa", 320:"Minnesota", 321:"Florida", 323:"California", 325:"Texas", 330:"Ohio", 331:"Illinois", 334:"Alabama", 336:"North Carolina", 337:"Louisiana", 339:"Massachusetts", 340:"US Virgin Islands", 341:"California", 347:"New York", 351:"Massachusetts", 352:"Florida", 360:"Washington", 361:"Texas", 369:"California", 380:"Ohio", 385:"Utah", 386:"Florida", 401:"Rhode Island", 402:"Nebraska", 404:"Georgia", 405:"Oklahoma", 406:"Montana", 407:"Florida", 408:"California", 409:"Texas", 410 :"Maryland", 412:"Pennsylvania", 413:"Massachusetts", 414:"Wisconsin", 415:"California", 417:"Missouri", 419:"Ohio", 423:"Tennessee", 424:"California", 425:"Washington", 430:"Texas", 432:"Texas", 434:"Virginia", 435:"Utah", 440:"Ohio", 442:"California", 443:"Maryland", 464:"Illinois", 469:"Texas", 470:"Georgia", 475:"Connecticut", 478:"Georgia", 479:"Arkansas", 480:"Arizona", 484:"Pennsylvania", 501:"Arkansas", 502:"Kentucky", 503:"Oregon", 504:"Louisiana", 505:"New Mexico", 507:"Minnesota", 508:"Massachusetts", 509:"Washington", 510:"California", 512:"Texas", 513:"Ohio", 515:"Iowa", 516:"New York", 517:"Michigan", 518:"New York", 520:"Arizona", 530:"California", 539:"Oklahoma", 540:"Virginia", 541:"Oregon", 551:"New Jersey", 557:"Missouri", 559:"California", 561:"Florida", 562:"California", 563:"Iowa", 564:"Washington", 567:"Ohio", 570:"Pennsylvania", 571:"Virginia", 573:"Missouri", 574:"Indiana", 575:"New Mexico", 580:"Oklahoma", 585:"New York", 586:"Michigan", 601:"Mississippi", 602:"Arizona", 603:"New Hampshire", 605:"South Dakota", 606:"Kentucky", 607:"New York", 608:"Wisconsin", 609:"New Jersey", 610:"Pennsylvania", 612:"Minnesota", 614:"Ohio", 615:"Tennessee", 616:"Michigan", 617:"Massachusetts", 618:"Illinois", 619:"California", 620:"Kansas", 623:"Arizona", 626:"California", 627:"California", 628:"California", 630:"Illinois", 631:"New York", 680:"New York", 636:"Missouri", 641:"Iowa", 646:"New York", 650:"California", 651:"Minnesota", 657:"California", 660:"Missouri", 661:"California", 662:"Mississippi", 669:"California", 670:"Northern Mariana Islands", 671:"Guam", 678:"Georgia", 679:"Michigan", 681:"West Virginia", 682:"Texas", 689:"Florida", 701:"North Dakota", 702:"Nevada", 703:"Virginia", 704:"North Carolina", 706:"Georgia", 707:"California", 708:"Illinois", 712:"Iowa", 713:"Texas", 714:"California", 715:"Wisconsin", 716:"New York",332:"New York", 717:"Pennsylvania", 718:"New York", 719:"Colorado", 720:"Colorado", 724:"Pennsylvania", 727:"Florida", 731:"Tennessee", 732:"New Jersey", 640:"New Jersey", 734:"Michigan", 737:"Texas", 740:"Ohio", 747:"California", 754:"Florida", 757:"Virginia", 760:"California", 762:"Georgia", 763:"Minnesota", 764:"California", 765:"Indiana", 769:"Mississippi", 770:"Georgia", 772:"Florida", 773:"Illinois", 774:"Massachusetts", 775:"Nevada", 779:"Illinois", 781:"Massachusetts", 785:"Kansas", 786:"Florida", 787:"Puerto Rico", 801:"Utah", 802:"Vermont", 803:"South Carolina", 804:"Virginia", 805:"California", 806:"Texas", 808:"Hawaii", 810:"Michigan", 812:"Indiana", 463:"Indiana", 930:"Indiana", 813:"Florida", 814:"Pennsylvania", 815:"Illinois", 816:"Missouri", 817:"Texas", 818:"California", 828:"North Carolina", 830:"Texas", 831:"California", 832:"Texas", 835:"Pennsylvania", 843:"South Carolina", 845:"New York", 847:"Illinois", 848:"New Jersey", 850:"Florida", 856:"New Jersey", 857:"Massachusetts", 858:"California", 859:"Kentucky", 860:"Connecticut", 862:"New Jersey", 863:"Florida", 864:"South Carolina", 865:"Tennessee", 870:"Arkansas", 872:"Illinois", 878:"Pennsylvania", 901:"Tennessee", 903:"Texas", 904:"Florida", 906:"Michigan", 907:"Alaska", 908:"New Jersey", 909:"California", 910:"North Carolina", 912:"Georgia", 913:"Kansas", 914:"New York", 915:"Texas", 916:"California", 917:"New York", 918:"Oklahoma", 919:"North Carolina", 920:"Wisconsin", 925:"California", 927:"Florida", 928:"Arizona", 931:"Tennessee", 935:"California", 936:"Texas", 937:"Ohio", 939:"Puerto Rico", 940:"Texas", 941:"Florida", 947:"Michigan", 949:"California", 951:"California", 952:"Minnesota", 954:"Florida", 956:"Texas", 957:"New Mexico", 959:"Connecticut", 970:"Colorado", 971:"Oregon", 972:"Texas", 973:"New Jersey", 975:"Missouri", 978:"Massachusetts", 979:"Texas", 980:"North Carolina", 984:"North Carolina", 985:"Louisiana", 989:"Michigan", 123:"Junagadh", 279:"california",938:"Alabama", 659: "Alabama", 849: "Dominican Republic", 829: "Dominican Republic", 809: "Dominican Republic", 876:"Jamaica", 658:"Jamaica", 364:"Kentucky", 667:"Maryland", 838:"New York", 934:"New York", 929:"New York", 743:"North Carolina", 220:"Ohio", 458:"Oregon", 445:"Pennsylvania", 272:"Pennsylvania", 223:"Pennsylvania", 721:"Sint Maarten", 839:"South Carolina", 854:"South Carolina", 869:"St. Kitts+%26+Nevis", 758:"St. Lucia", 784:"St. Vincent+%26+the Grenadines", 629:"Tennessee", 726:"Texas", 346:"Texas", 868:"Trinidad+%26+Tobago",649:"Turks+%26+Caicos", 534:"Wisconsin", 403:"Alberta", 587:"Alberta", 825:"Alberta", 780:"Alberta", 250:"British Columbia", 778:"British Columbia", 236:"British Columbia", 672:"British Columbia", 604:"British Columbia", 204:"Manitoba", 431:"Manitoba", 506:"New Brunswick", 709:"Newfoundland" , 867:"Northwest Territories", 902:"Nova Scotia", 782:"Nova Scotia AND Prince Edward Island", 416:"Ontario", 647:"Ontario", 437:"Ontario", 519:"Ontario", 226:"Ontario", 548:"Ontario", 613:"Ontario", 343:"Ontario", 705:"Ontario", 249:"Ontario", 807:"Ontario", 905:"Ontario", 289:"Ontario", 365:"Ontario", 418:"Quebec", 581:"Quebec", 367:"Quebec", 450:"Quebec", 579:"Quebec", 514:"Quebec", 438:"Quebec", 819:"Quebec", 873:"Quebec", 306:"Saskatchewan", 639:"Saskatchewan", 345:"Cayman Islands", 767:"Commonwealth of Dominica", 473:"Grenada", 664:"Montserrat", 531:"Nebraska", 725:"Nevada"}; // Trinidad & Tobago, Turks & Caicos, St. Vincent & the Grenadines, St. Lucia
    
    var loc = dir[areaCODE];
    
    var dummy = document.createElement("input");
document.body.appendChild(dummy);
dummy.setAttribute("id", "dummy_id");
dummy.setAttribute('value', a)
dummy.select();
document.execCommand("copy");
document.body.removeChild(dummy);
    
    
window.open("https://www.google.com/search?q=" + a);
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + loc);
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + ee);  
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + "party");
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + "Facebook");
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + "Instagram");
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + "Twitter");
window.open('https://www.google.com/search?q="' + ee + '"');
window.open('https://www.google.com/search?q="' + ii + '"');
window.open('https://www.google.com/search?q="' + k + '"');
window.open('https://www.google.com/search?q="' + ee + '"' + "+" + plus + "+" + "party");
window.open('https://www.google.com/search?q="' + b + '"');
window.open('https://www.google.com/search?q="' + bb + '"');
window.open('https://www.google.com/search?q="' + b + '"' + "+" + plus + "+" + "party");
window.open("https://www.facebook.com/search/top?q=" + fb);
window.open("https://www.facebook.com/search/top?q=" + fb + "%2C%20" + loc);   
window.open("https://www.instagram.com/" + bb + "/");
window.open("https://www.twitter.com/search?q=" + tw);    
document.getElementById("inputText").value = "";
}

function MX(){
 var textInput = document.getElementById("inputText").value;
 var array = textInput.split(/\r?\n/);
    var a = array[0];
    var aa = a.split(" ");
    var b = array[2].split(" ")[0];
    var bb = b.split("@")[0]; 
    var c = array[3];
    var cc = c.replace("+", "");
    var plus = "%2B";
    var d = c.split(" ").join(""); // all spaces removed
    var dd = d.replace("+", ""); // space and + removed
    var ddd = dd.replace(dd[0], "");
    var dddd = ddd.replace(dd[1], ""); // +52 removed
    
    var dummy = document.createElement("input");
document.body.appendChild(dummy);
dummy.setAttribute("id", "dummy_id");
dummy.setAttribute('value', a)
dummy.select();
document.execCommand("copy");
document.body.removeChild(dummy);
    
    
    var fb = "";
    var i;
for (i = 0; i < aa.length; i++) {
    fb += aa[i] + "%20";
}
    fb = fb.substring(0, fb.length - 3);
    
    
        var tw = "";
for (i = 0; i < aa.length; i++) {
    tw += aa[i] + "+";
}
    tw = tw.substring(0, tw.length - 1) + "&f=user";
    
    
    var CODE = [dd[0],dd[1]];
    var areaCODE = CODE.join().split(",").join("");
    var loc = "";
    
    if (areaCODE == 52) {
        loc = "Mexico";
}   else if (areaCODE == 61) {
        loc = "Australia";
}

window.open("https://www.google.com/search?q=" + a);
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + loc);
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + cc);
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + "party");
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + "Facebook");
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + "Instagram");
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + "Twitter");
window.open('https://www.google.com/search?q="' + plus + cc + '"');
window.open('https://www.google.com/search?q="' + plus + dd + '"'); // mx number with + sign
window.open('https://www.google.com/search?q="' + dd + '"');
window.open('https://www.google.com/search?q="' + dddd + '"');
window.open('https://www.google.com/search?q="' + plus + cc + '"' + "+" + plus + "+" + "party");
window.open('https://www.google.com/search?q="' + b + '"');
window.open('https://www.google.com/search?q="' + bb + '"');
window.open('https://www.google.com/search?q="' + b + '"' + "+" + plus + "+" + "party");
window.open("https://www.facebook.com/search/top?q=" + fb); 
window.open("https://www.facebook.com/search/top?q=" + fb + "%2C%20" + loc);         
window.open("https://www.instagram.com/" + bb + "/");
window.open("https://www.twitter.com/search?q=" + tw);    
document.getElementById("inputText").value = "";
}

function MX2(){
 var textInput = document.getElementById("inputText").value;
 var array = textInput.split(/\r?\n/);
    var a = array[0];
    var aa = a.split(" ");
    var b = array[2].split(" ")[0];
    var bb = b.split("@")[0]; 
    var c = array[4];
    var cc = c.replace("+", "");
    var plus = "%2B"
    var d = c.split(" ").join(""); // all spaces removed
    var dd = d.replace("+", ""); // space and + removed
    var ddd = dd.replace(dd[0], "");
    var dddd = ddd.replace(dd[1], ""); // +52 removed
    
    
var dummy = document.createElement("input");
document.body.appendChild(dummy);
dummy.setAttribute("id", "dummy_id");
dummy.setAttribute('value', a)
dummy.select();
document.execCommand("copy");
document.body.removeChild(dummy);
    
    
    var fb = "";
    var i;
for (i = 0; i < aa.length; i++) {
    fb += aa[i] + "%20";
}
    fb = fb.substring(0, fb.length - 3);
    
    
        var tw = "";
for (i = 0; i < aa.length; i++) {
    tw += aa[i] + "+";
}
    tw = tw.substring(0, tw.length - 1) + "&f=user";
    
    
    
    var CODE = [dd[0],dd[1]];
    var areaCODE = CODE.join().split(",").join("");
    var loc = "";
    
    if (areaCODE == "52") {
        loc = "Mexico";
}   else if (areaCODE == "61") {
        loc = "Australia";
}

window.open("https://www.google.com/search?q=" + a);
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + loc);
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + cc);
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + "party");
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + "Facebook");
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + "Instagram");
window.open("https://www.google.com/search?q=" + a + "+" + plus + "+" + "Twitter");
window.open('https://www.google.com/search?q="' + plus + cc + '"');
window.open('https://www.google.com/search?q="' + plus + dd + '"'); // mx number with + sign
window.open('https://www.google.com/search?q="' + dd + '"');
window.open('https://www.google.com/search?q="' + dddd + '"');
window.open('https://www.google.com/search?q="' + plus + cc + '"' + "+" + plus + "+" + "party");
window.open('https://www.google.com/search?q="' + b + '"');
window.open('https://www.google.com/search?q="' + bb + '"');
window.open('https://www.google.com/search?q="' + b + '"' + "+" + plus + "+" + "party");
window.open("https://www.facebook.com/search/top?q=" + fb);  
window.open("https://www.facebook.com/search/top?q=" + fb + "%2C%20" + loc);        
window.open("https://www.instagram.com/" + bb + "/");
window.open("https://www.twitter.com/search?q=" + tw);    
document.getElementById("inputText").value = "";
}
