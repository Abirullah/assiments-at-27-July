let score="30";


switch (true) {
    case (score>=90 && score<=100):
        console.log("Your grade is A1")
        
          break;
    case (score>=80 && score<=90):
        console.log("Your grade is A")
            
            break;
    case (score>=70 && score<=80):
         console.log("Your grade is B")
                
             break;
     case (score>=60 && score<=70):
        console.log("Your grade is C ")
                    
             break;
     case (score>=50 && score<=60):
         console.log("Your grade is D")
                
             break;
     case (score>=40 && score<=50):
         console.log("Your grade is E")
                    
             break;
      case (score>=30 && score<=40):
         console.log("You should gave supplementary Exam")
                        
             break;
   
    default:
        console.log("you are fail")
        break;
}