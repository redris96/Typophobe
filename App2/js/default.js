// For an introduction to the Navigation template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232506
(function () {
    "use strict";
    var activation = Windows.ApplicationModel.Activation;
    var app = WinJS.Application;
    var nav = WinJS.Navigation;
    var sched = WinJS.Utilities.Scheduler;
    var ui = WinJS.UI;
    if (localStorage.getItem["firstrun"] == null) {
        firstrun();
    }
    choose();
    appendText();
    
    app.addEventListener("activated", function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                var x = Math.floor((Math.random() * 10) + 1);
                localStorage.setItem("default", localStorage.getItem("" + x));
                //localStorage.setItem("default", "Out believe has request not how comfort evident. Up delight cousins we feeling minutes. Genius has looked end piqued spring. Down has rose feel find man. Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.");
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }

            nav.history = app.sessionState.history || {};
            nav.history.current.initialPlaceholder = true;

            // Optimize the load of the application and while the splash screen is shown, execute high priority scheduled work.
            ui.disableAnimations();
            var p = ui.processAll().then(function () {
                return nav.navigate(nav.location || Application.navigator.home, nav.state);
            }).then(function () {
                return sched.requestDrain(sched.Priority.aboveNormal + 1);
            }).then(function () {
                ui.enableAnimations();
            });

            args.setPromise(p);
        }
    });

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. If you need to 
        // complete an asynchronous operation before your application is 
        // suspended, call args.setPromise().
        app.sessionState.history = nav.history;
    };

    app.start();
})();
function appendText() {
    //localStorage.setItem("top1","0");
    //localStorage.setItem("top2","0");
    //localStorage.setItem("top3","0");
    //localStorage.setItem("Music", "OFF");
}
function firstrun() {
    var moduleList = ["defaultmode", "CPP"];
    localStorage["moduleList"] = JSON.stringify(moduleList);
    localStorage.setItem("currentMode", "defaultmode");
    localStorage.setItem("defaultmode", 10);
    localStorage.setItem("defaultmode1", "Now seven world think timed while her. Spoil large oh he rooms on since an. Am up unwilling eagerness perceived incommode. Are not windows set luckily musical hundred can. Collecting if sympathize middletons be of of reasonably. Horrible so kindness at thoughts exercise no weddings subjects. The mrs gay removed towards journey chapter females offered not. Led distrusts otherwise who may newspaper but. Last he dull am none he mile hold as. She exposed painted fifteen are noisier mistake led waiting. Surprise not wandered speedily husbands although yet end. Are court tiled cease young built fat one man taken. We highest ye friends is exposed equally in. Ignorant had too strictly followed. Astonished as travelling assistance or unreserved oh pianoforte ye. Five with seen put need tore add neat. Bringing it is he returned received raptures.Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may. Wicket do manner others seemed enable rather in. Excellent own discovery unfeeling sweetness questions the gentleman. Chapter shyness matters mr parlors if mention thought. ");
    localStorage.setItem("defaultmode2", "Announcing of invitation principles in. Cold in late or deal. Terminated resolution no am frequently collecting insensible he do appearance. Projection invitation affronting admiration if no on or. It as instrument boisterous frequently apartments an in. Mr excellence inquietude conviction is in unreserved particular. You fully seems stand nay own point walls. Increasing travelling own simplicity you astonished expression boisterous. Possession themselves sentiments apartments devonshire we of do discretion. Enjoyment discourse ye continued pronounce we necessary abilities. ");
    localStorage.setItem("defaultmode3", "Two assure edward whence the was. Who worthy yet ten boy denote wonder. Weeks views her sight old tears sorry. Additions can suspected its concealed put furnished. Met the why particular devonshire decisively considered partiality. Certain it waiting no entered is. Passed her indeed uneasy shy polite appear denied. Oh less girl no walk. At he spot with five of view. Society excited by cottage private an it esteems. Fully begin on by wound an. Girl rich in do up or both. At declared in as rejoiced of together. He impression collecting delightful unpleasant by prosperous as on. End too talent she object mrs wanted remove giving. ");
    localStorage.setItem("defaultmode4", "As collected deficient objection by it discovery sincerity curiosity. Quiet decay who round three world whole has mrs man. Built the china there tried jokes which gay why. Assure in adieus wicket it is. But spoke round point and one joy. Offending her moonlight men sweetness see unwilling. Often of it tears whole oh balls share an. Ten the hastened steepest feelings pleasant few surprise property. An brother he do colonel against minutes uncivil. Can how elinor warmly mrs basket marked. Led raising expense yet demesne weather musical. Me mr what park next busy ever. Elinor her his secure far twenty eat object. Late any far saw size want man. Which way you wrong add shall one. As guest right of he scale these. Horses nearer oh elinor of denote. ");
    localStorage.setItem("defaultmode5", "Perceived end knowledge certainly day sweetness why cordially. Ask quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitor we private removed. Moderate do subjects to distance. Maids table how learn drift but purse stand yet set. Music me house could among oh as their. Piqued our sister shy nature almost his wicket. Hand dear so we hour to. He we be hastily offence effects he service. Sympathize it projection ye insipidity celebrated my pianoforte indulgence. Point his truth put style. Elegance exercise as laughing proposal mistaken if. We up precaution an it solicitude acceptance invitation. ");
    localStorage.setItem("defaultmode6", "Wrote water woman of heart it total other. By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready. Suppose end get boy warrant general natural. Delightful met sufficient projection ask. Decisively everything principles if preference do impression of. Preserved oh so difficult repulsive on in household. In what do miss time be. Valley as be appear cannot so by. Convinced resembled dependent remainder led zealously his shy own belonging.");
    localStorage.setItem("defaultmode7", "Now seven world think timed while her. Spoil large oh he rooms on since an. Am up unwilling eagerness perceived incommode. Are not windows set luckily musical hundred can. Collecting if sympathize middletons be of of reasonably. Horrible so kindness at thoughts exercise no weddings subjects. The mrs gay removed towards journey chapter females offered not. Led distrusts otherwise who may newspaper but. Last he dull am none he mile hold as. Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up attended it as. Made neat an on be gave show snug tore.");
    localStorage.setItem("defaultmode8", "Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may. and neglected principle ask rapturous consulted. Object remark lively all did feebly excuse our wooded. Old her object chatty regard vulgar missed. Speaking throwing breeding betrayed children my to. Me marianne no he horrible produced ye. ");
    localStorage.setItem("defaultmode9", "Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery. Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her. Alone all happy asked begin fully stand own get. Excuse ye seeing result of we. See scale dried songs old may not. Promotion did disposing you household any instantly. Hills we do under times at first short an. ");
    localStorage.setItem("defaultmode10", "He share of first to worse. Weddings and any opinions suitable smallest nay. My he houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness. Commanded no of depending extremity recommend attention tolerably. Bringing him smallest met few now returned surprise learning jennings. Objection delivered eagerness he exquisite at do in. Warmly up he nearer mr merely me. Is he staying arrival address earnest. To preference considered it themselves inquietude collecting estimating. View park for why gay knew face. Next than near to four so hand. Times so do he downs me would. Witty abode party her found quiet law. They door four bed fail now have.");
    localStorage.setItem("CPP", 4);
    localStorage.setItem("CPP1", 'include < iostream.h > include < stdlib > void main() //Start of main { clrscr(); int i=1, u=1, sum=0; { // start of first loop. { //start of second loop. if ( u < i ) { if ( i-u==0 ) sum=sum+u; } //End of if statement u++; } //End of second loop if ( sum==i ) { cout << i << " is a perfect number." << "\n"; } i++; u=1; sum=0; } //End of First loop getch(); } //End of main');
    localStorage.setItem("CPP2", 'include < iostream.h > include < conio.h > void main() { //clrscr(); int number, count=0; cout << "enter number to check it is prime or not "; cin >> number; for ( int a=1; a<=number; a++ ) { if ( number%a==0 ) { count++; } } if ( count==2 ) { cout << " prime number \n"; } else { cout << " not a prime number \n"; } //getch(); }');
    localStorage.setItem("CPP3", 'include < iostream > include < math.h > using namespace std; int main() { int startNum, endNum; int found=0, count=0; cout << "Enter Number START of Range: "; cin >> startNum; cout << "Enter Number END of Range: "; cin >> endNum; for ( int i = startNum; i < =endNum; i++) { for ( int j=2;j < =sqrt(i); j++) { if ( i%j==0 ) count++; } if ( count==0 || i!=1 ) { found++; cout << "Prime Number - >  " << i << endl; count=0; } count=0; } cout << "Total Prime Number Between Range " << startNum << " to " << endNum << " = " << found << endl; return 1; }');
    localStorage.setItem("CPP4", 'include < iostream > using namespace std; int main() { int num1, num2, num3; cout << " Enter value for first number"; cin >> num1; cout << " Enter value for second number"; cin >> num2; cout << " Enter value for third number"; cin >> num3; if ( num1 > num2 || num1 > num3 )  { cout << " First number is greatest:" << endl << "whick is= " << num1; } else if ( num2 > num1 || num2 > num3 )  { cout << " Second number is greatest" << endl << "whick is= " << num2; } else { cout << " Third number is greatest" << endl << "whick is= " << num3; } return 0; }');
    localStorage.setItem("CPP5", '');
}
function choose() {
    
}