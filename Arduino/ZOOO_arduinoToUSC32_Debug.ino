char var;
char chunk;
int servo_name;
boolean iscomplete=false;
String cmd1="";
String cmd1_1="";
String cmd2="";
String cmd2_1="";
String cmdp1="";
String cmdp2="";

String P[11]={"500","700","900","1100","1300","1500","1700","1900","2100","2300","2500"};
              //0     1      2     3      4      5     6       7      8       9     10
void setup() 
{
  Serial1.begin(9600);
  Serial.begin(115200);
}
void loop() 
{
    var=Serial.read();


    //---------------------------------------------------------- blue
    if (var=='3')    //blue head 
    {
      Serial.println("<--------start---------");
      Serial1.print("#3P1000T1000\r\n");
      delay(1000);
      Serial1.print("#3P1800T3000\r\n");
      delay(3000);
      Serial1.print("#3P1500T1000\r\n");
      delay(1000);
      Serial.println("--------end--------->");
    }
    if (var=='4')   //blue mouth   900-1500
    {
      Serial.print("<---start---");
      Serial1.print("#4P900T200\r\n");
      delay(200);
      Serial1.print("#4P1350T200\r\n");
      delay(200);
      Serial.println("---end--->");
    }
    
    if (var=='5')  //blue left hand
    {
      Serial.println("<--------start---------");
      Serial1.print("#5P2100T1000\r\n");
      delay(1000);
      Serial1.print("#5P700T2000\r\n");
      delay(2000);
      Serial1.print("#5P1500T1000\r\n");
      delay(1000);
      Serial.println("--------end--------->");
    }
    
    
    if (var=='6')  //blue right hand
    {
      Serial.println("<--------start---------");
      Serial1.print("#6P800T1000\r\n");
      delay(1000);
      Serial1.print("#6P2200T2000\r\n");
      delay(2000);
      Serial1.print("#6P1500T1000\r\n");
      delay(1000);
      Serial.println("--------end--------->");
    }
    
    if (var == '7')  //blue body
    {
      Serial.println("<--------start---------");
      Serial1.print("#7P2500T1000\r\n");
      delay(1000);
      Serial1.print("#7P500T2000\r\n");
      delay(2000);
      Serial1.print("#7P1500T1000\r\n");
      delay(1000);
      Serial.println("--------end--------->");
    }
    //-------------------------------------------------------------- red
     if (var=='q')    //red head
    {
      Serial.println("<--------start---------");
      Serial1.print("#14P1000T1000\r\n");
      delay(1000);
      Serial1.print("#14P1800T3000\r\n");
      delay(3000);
      Serial1.print("#14P1500T1000\r\n");
      delay(1000);
      Serial.println("--------end--------->");
    }
    if (var=='w')   //red mouth  1500-2000
    {
       Serial.print("<---start---");
      Serial1.print("#15P2000T200\r\n");
      delay(200);
      Serial1.print("#15P1650T200\r\n");
      delay(200);
      Serial.println("---end--->");
    }
    
    if (var=='e')  //red left hand
    {
      Serial.println("<--------start---------");
      Serial1.print("#16P2100T1000\r\n");
      delay(1000);
      Serial1.print("#16P700T2000\r\n");
      delay(2000);
      Serial1.print("#16P1500T1000\r\n");
      delay(1000);
      Serial.println("--------end--------->");
    }
    
    
    if (var=='r')  //red right hand
    {
      Serial.println("<--------start---------");
      Serial1.print("#17P800T1000\r\n");
      delay(1000);
      Serial1.print("#17P2200T2000\r\n");
      delay(2000);
      Serial1.print("#17P1500T1000\r\n");
      delay(1000);
      Serial.println("--------end--------->");
    }
    
    if (var=='t')  //red body
    {
      Serial.println("<--------start---------");
      Serial1.print("#18P2500T1000\r\n");
      delay(1000);
      Serial1.print("#18P500T2000\r\n");
      delay(2000);
      Serial1.print("#18P1500T1000\r\n");
      delay(1000);
      Serial.println("--------end--------->");
    }
    
    
    
    //-------------------------------------------------------------- green
     if (var=='a')    //green head
    {
      Serial.println("<---start---");
      Serial1.print("#26P1000T1000\r\n");
      delay(1000);
      Serial1.print("#26P1800T3000\r\n");
      delay(3000);
      Serial1.print("#26P1500T1000\r\n");
      delay(1000);
      Serial.println("--------end--------->");
    }
    if (var=='s')   //green mouth
    {
      Serial.print("<---start---");
      Serial1.print("#27P2200T200\r\n");
      delay(200);
      Serial1.print("#27P1800T200\r\n");
      delay(200);
      Serial.println("---end--->");
    }
    
    if (var=='d')  //green left hand
    {
      Serial.println("<--------start---------");
      Serial1.print("#28P2100T1000\r\n");
      delay(1000);
      Serial1.print("#28P700T2000\r\n");
      delay(2000);
      Serial1.print("#28P1500T1000\r\n");
      delay(1000);
      Serial.println("--------end--------->");
    }
    
    
    if (var=='f')  //green right hand
    {
      Serial.println("<--------start---------");
      Serial1.print("#29P800T1000\r\n");
      delay(1000);
      Serial1.print("#29P2200T2000\r\n");
      delay(2000);
      Serial1.print("#29P1500T1000\r\n");
      delay(1000);
      Serial.println("--------end--------->");
    }
    
    if (var=='g')  //green body
    {
      Serial.println("<--------start---------");
      Serial1.print("#30P2500T1000\r\n");
      delay(1000);
      Serial1.print("#30P500T2000\r\n");
      delay(2000);
      Serial1.print("#30P1500T1000\r\n");
      delay(1000);
      Serial.println("--------end--------->");
    }
    
    
    
    
//    if(var=='6')
//    {
//       Serial.print("<--------start---------");
//      for(int i=0;i<=9;i++)
//      {
//      Serial1.print("#6P1500T500\r\n");
//      delay(500);
//      Serial1.print("#6P900T500\r\n");
//      delay(500);
//      Serial1.print("#6P1500T500\r\n");
//      delay(400);
//      Serial.println("--------end--------->");
//      }
//    }
    
  
    
//    if(var == 's')    //set servo to original position 1500
//    {
//      Serial.println("Initial start.");
//      Serial1.print("#1P1500T3000\r\n");
//      Serial1.print("#24P1600T3000\r\n");      //switch #2 to #23
//      Serial1.print("#3P1500T3000\r\n");delay(1000);
//      Serial.print("...");
//      Serial1.print("#4P1500T3000\r\n");
//      Serial1.print("#5P1500T3000\r\n");
//      
//      Serial1.print("#8P1500T3000\r\n");delay(1000);Serial.print("...");
//      Serial1.print("#9P1500T3000\r\n");
//      Serial1.print("#10P1500T3000\r\n");
//      Serial1.print("#11P1500T3000\r\n");delay(1000);Serial.print("...");
//      Serial1.print("#12P1500T3000\r\n"  );
//      
//      Serial1.print("#15P1500T3000\r\n");
//      Serial1.print("#16P1500T3000\r\n");delay(1000);Serial.print("...");
//      Serial1.print("#17P1500T3000\r\n");
//      Serial1.print("#18P1500T3000\r\n");
//      Serial1.print("#19P1500T3000\r\n");delay(1000);Serial.print("...");
//      
//      
//      Serial1.print("#6P500T3000\r\n");delay(2000);
//      Serial1.print("#7P2400T3000\r\n");delay(2000);Serial.print("...");
//      
//      Serial1.print("#26P500T3000\r\n");delay(2000);     //switch #13 to # 26
//      Serial1.print("#14P2400T3000\r\n");delay(2000);Serial.print("...");
//      
//       Serial1.print("#20P500T3000\r\n");delay(2000);
//      Serial1.print("#25P2400T3000\r\n");delay(2000);   //switch #21 to #25
//        
//      Serial.println("...");
//      Serial.println("Initial complete.");
//      
//        
//    }



    if(var == 'm')  //initial all servo
    {
      Serial.println("Initial start.");
      //red
      Serial1.print("#14P1500T3000\r\n");delay(100);Serial.print("...");
      Serial1.print("#15P1650T3000\r\n");delay(100);      
      Serial1.print("#161500T3000\r\n");delay(2000);
      Serial.print("...");
      Serial1.print("#17P1500T3000\r\n");delay(100);
      Serial1.print("#18P1500T3000\r\n");delay(100);
      Serial.println("Red initial complete...");
      //green
      Serial1.print("#26P1500T3000\r\n");delay(2000);Serial.print("...");
      Serial1.print("#27P1400T3000\r\n");delay(100);
      Serial1.print("#28P1500T3000\r\n");delay(100);
      Serial1.print("#29P1500T3000\r\n");delay(2000);Serial.print("...");
      Serial1.print("#30P1500T3000\r\n"  );delay(100);
      Serial.println("Green initial complete...");
      //blue
      Serial1.print("#3P1500T3000\r\n");delay(100);
      Serial1.print("#4P1400T3000\r\n");delay(2000);Serial.print("...");
      Serial1.print("#5P1500T3000\r\n");delay(100);
      Serial1.print("#6P1500T3000\r\n");delay(100);
      Serial1.print("#7P1500T3000\r\n");delay(2000);Serial.print("...");
      Serial.println("Blue initial complete...");
      //red panel
      Serial1.print("#19P500T3000\r\n");delay(2000);
      Serial1.print("#20P2400T3000\r\n");delay(2000);Serial.print("...");
      Serial.println("Red panel initial complete...");
      //green panel
      Serial1.print("#31P500T3000\r\n");delay(2000);     //switch #13 to # 26
      Serial1.print("#32P2400T3000\r\n");delay(2000);Serial.print("...");
      Serial.println("Green panel initial complete...");
      //blue panel
      Serial1.print("#8P500T3000\r\n");delay(2000);
      Serial1.print("#9P2400T3000\r\n");delay(2000);Serial.print("...");
      Serial.println("Blue panel initial complete...");
        
      //Serial.println("...");
      Serial.println("Initial complete.");
    }
    
    
    if(var == 'i')     //INITIAL FOR BASE
    { 
      Serial.println("1st servo set to origin start");
      cmd1="#22P500T3000\r\n";    //up servo set to 500
      delay(2);
      Serial.println(cmd1);
      delay(50);  
      Serial1.print("#22P500T3000\r\n");
      delay(3000);
      
      delay(1000);
      
      Serial.println("2nd servo set to origin start");
      cmd2 = "#23P2400T3000\r\n";   //down servo set to 2400
      delay(2);
      Serial.print(cmd2); 
      delay(50);  
      //Serial1.print(cmd2);
      Serial1.print("#23P2400T3000\r\n");   //down servo set to 2400
      Serial.print(cmd2);   
      delay(3000); 
      Serial.println("Initial complete.");

        
    }
    
    if(var == 'n')    //TEST FOR BASE
    {
//      for(int i=0;i<=9;i++)
//      {
      delay(1000);
      Serial1.print("#22P2400T3500\r\n");        //anticlockwise to 180
      Serial.println("anticlockwise to end +[180]");
      delay(3500);
      Serial1.print("#22P500T3500\r\n");         //clockwise to 0
      Serial.println("Back to start point [0]");
      delay(3500);
//      }
    }
      
    if(var == 'b')    //TEST FOR BASE
    {
     
//      Serial1.print("#22P2400T3500\r\n");        //anticlockwise to 180
//      Serial.println("anticlockwise to end +[180]");
//      delay(3500);
//      Serial1.print("#22P500T3500\r\n");         //clockwise to 0
//      Serial.println("Back to start point [0]");
//      delay(3500);
      
//      delay(1000);
     
      Serial1.print("#23P500T3500\r\n");        //anticlockwise to 180
      Serial.println("clockwise to end [-180]");
      delay(3500);
      delay(1000);
      Serial1.print("#23P2400T3500\r\n");        //clockwise to 0
      Serial.println("Back to start point [0]");
      delay(3500);
      
      delay(1000);
      
      Serial1.print("#22P2400T3500\r\n");        //anticlockwise to 180
      Serial.println("anticlockwise to end +[180]");
      delay(3500);
      Serial1.print("#22P500T3500\r\n");         //clockwise to 0
      Serial.println("Back to start point [0]");
      delay(3500);
      
      
    }
    
    
    if(var == 'x') 
    { //cmd format ::::::x0103E
      Serial.println("wait for cmd");
      
      while(!iscomplete)
      {
        Serial.println("2 wait for cmd");
        chunk = char(Serial.read());
        Serial.println(chunk);
        
        if(chunk == 'E')
        {
          Serial.print("The cmd is ");Serial.println(cmd1);  //why this string is uncorrectly displayed;
           int index=cmd1.substring(3,5).toInt();
           servo_name=cmd1.substring(1,3).toInt();
           Serial.print("The number is: #");Serial.println(servo_name);
           Serial.println(index);
           
           Serial.println("The servo will trun to position :");Serial.print(P[index]);Serial.println("<--");
           Serial1.print("#");
           Serial1.print(servo_name);
           Serial1.print("P");
           Serial1.print(P[index]);
           Serial1.print("T1500\r\n");
           delay(1000);         
           cmd1="";
           iscomplete = true;
           
        }else if(iscomplete == false){
          cmd1 = cmd1 + chunk;
          delay(2); 
          Serial.print(cmd1);
        }
      }
      iscomplete = false;
    } 
     
    if(var == 'l')    //TEST FOR PANLE RED  #19#20
    {
      Serial1.print("#19P2400T3000\r\n");        //anticlockwise to 180
      Serial.println("Panel red anticlockwise to end [+180]");
      delay(3000);
      Serial1.print("#19P500T3000\r\n");         //clockwise to 0
      Serial.println("Panel red Back to start point [0]");
      delay(3000);
      
      delay(1000);
      
      Serial1.print("#20P500T3000\r\n");        //anticlockwise to 180
      Serial.println("Panel red clockwise to end [-180]");
      delay(3000);
      Serial1.print("#20P2400T3000\r\n");        //clockwise to 0
      Serial.println("Panel red Back to start point [0]");
      delay(3000);
    }
    
     if(var == 'o')    //TEST FOR PANLE GREEN #31#32 
    {
      Serial1.print("#31P2300T3000\r\n");        //anticlockwise to 180
      Serial.println("Panle green anticlockwise to end [+180]");
      delay(3000);
      Serial1.print("#31P500T3000\r\n");         //clockwise to 0
      Serial.println("Panle green Back to start point [0]");
      delay(3000);
      
      delay(1000);
      
      Serial1.print("#32P500T3000\r\n");        //anticlockwise to 180
      Serial.println("Panle green clockwise to end [-180]");
      delay(3000);
      Serial1.print("#32P2400T3000\r\n");        //clockwise to 0
      Serial.println("Panle gree n Back to start point [0]");
      delay(3000);
    }
    
    if(var == 'p')    //TEST FOR PANLE BLUE #8#9
    {
      Serial1.print("#8P2400T3000\r\n");        //anticlockwise to 180
      Serial.println("Panle blue anticlockwise to end [+180]");
      delay(3000);
      Serial1.print("#8P500T3000\r\n");         //clockwise to 0
      Serial.println("Panle blue Back to start point [0]");
      delay(3000);
      
      delay(1000);
      
      Serial1.print("#9P500T3000\r\n");        //anticlockwise to 180
      Serial.println("Panle blue clockwise to end [-180]");
      delay(3000);
      Serial1.print("#9P2400T3000\r\n");        //clockwise to 0
      Serial.println("Panle blue Back to start point [0]");
      delay(3000);
    }
    
    
    
}
