//#include <Servo.h>
//#include <String.h>
//#include <Stdio.h>

#define CMD_LENGTH 30




String received="";
String cmd;
String cmd_d_0;

int cmd_current_num;
String order="";




void setup() {
  Serial.begin(115200);
  Serial1.begin(9600);
  //while(!Serial){;}
}

void debugservo()   // debug function
{
            String tmp1="#1P1800#2P1800T2000\r\n";
            String tmp2="#1P800#2P800T2000\r\n";
            tmp1 = tmp1.substring(0,7)+tmp1.substring(14,20);
            Serial.print(tmp1);
            Serial1.print(tmp1);
            Serial1.print("\r\n");
            delay(2000);
            Serial1.print(tmp2);
            delay(2000);
}

void loop()
{ 
  while (Serial.available()>0)
  {
    char chunk = char(Serial.read());
    
    if(chunk == 'E')
    {         
      Serial.println("the whole string is");
      Serial.println(received);
      Serial.print("the length is :");Serial.println(received.length());
        cmd_current_num=received.length()/CMD_LENGTH; // num of cmd
        
        for(int i=0;i<cmd_current_num;i++)
        { 
          order = received.substring(0,4);
          String subcmd = received.substring(4,30); // delete order and create the cmd
          //Serial.println("cmd:");
          //Serial.println(subcmd);
          received = received.substring(30,received.length()); //delete the readed cmd
          //Serial.println("new received");
          //Serial.println(received);
          int wait = subcmd.substring(20,26).toInt();    // cal delay time
          Serial.print("Delay time : ");Serial.println(wait);        
          
          if(wait ==999999)
          {
            Serial.println("Initial start.");
            Serial1.print("#1P1500T3000\r\n");
            Serial1.print("#24P1600T3000\r\n");      //switch #2 to #23
            Serial1.print("#3P1500T3000\r\n");delay(1000);
            Serial.print("...");
            Serial1.print("#4P1500T3000\r\n");
            Serial1.print("#5P1500T3000\r\n");
            
            Serial1.print("#8P1500T3000\r\n");delay(1000);Serial.print("...");
            Serial1.print("#9P1500T3000\r\n");
            Serial1.print("#10P1500T3000\r\n");
            Serial1.print("#11P1500T3000\r\n");delay(1000);Serial.print("...");
            Serial1.print("#12P1500T3000\r\n"  );
            
            Serial1.print("#15P1500T3000\r\n");
            Serial1.print("#16P1500T3000\r\n");delay(1000);Serial.print("...");
            Serial1.print("#17P1500T3000\r\n");
            Serial1.print("#18P1500T3000\r\n");
            Serial1.print("#19P1500T3000\r\n");delay(1000);Serial.print("...");
            
            
            Serial1.print("#6P500T3000\r\n");delay(2000);
            Serial1.print("#7P2400T3000\r\n");delay(2000);Serial.print("...");
            
            Serial1.print("#26P500T3000\r\n");delay(2000);     //switch #13 to # 26
            Serial1.print("#14P2400T3000\r\n");delay(2000);Serial.print("...");
            
            Serial1.print("#20P500T3000\r\n");delay(2000);
            Serial1.print("#25P2400T3000\r\n");delay(2000);   //switch #21 to #25
              
            Serial.println("...");   
            Serial.println("Initial complete.");
          }
          else
          {
          cmd = subcmd.substring(0,19);  //final cmd is stored in string "cmd"
            
            //debug 
//          char tmp1 = cmd[3]; 
//          char tmp2 = cmd[4]; 
//          Serial.print("The in store cmd[0] is :");Serial.println(cmd[0]);
//          Serial.print("The in store cmd[3] is :");Serial.println(tmp1);
//          Serial.print("The in store cmd[4] is :");Serial.println(tmp2);
//          
//          /*deal with the '0' in each slice.*/
//              if(cmd.substring(1,3).toInt()<10){
//                cmd_d_0 = '#' + cmd.substring(2,3);
//              }else{
//                cmd_d_0 = cmd.substring(0,3);
//              }
//              
//              if(cmd.substring(4,8).toInt()<1000){
//                cmd_d_0 = cmd_d_0 + 'P' + cmd.substring(5,8);
//              }else{
//                cmd_d_0 = cmd_d_0 + cmd.substring(3,8);
//              }
//              
//              if(cmd.substring(9,15).toInt()<10){
//                cmd_d_0 = cmd_d_0 + 'T' + cmd.substring(14,15);
//              }else if(cmd.substring(9,15).toInt()<100){
//                cmd_d_0 = cmd_d_0 + 'T' + cmd.substring(13,15);
//              }else if(cmd.substring(9,15).toInt()<1000){
//                cmd_d_0 = cmd_d_0 + 'T' + cmd.substring(12,15);
//              }else if(cmd.substring(9,15).toInt()<10000){
//                cmd_d_0 = cmd_d_0 + 'T' + cmd.substring(11,15);
//              }else if(cmd.substring(9,15).toInt()<100000){
//                cmd_d_0 = cmd_d_0 + 'T' + cmd.substring(10,15);
//              }else{
//                cmd_d_0 = cmd_d_0 + cmd.substring(8,15);
//              }
           
           String cmd_d_1="";
           String cmd_d_2="";
           String cmd_d_3="";
           String cmd_d_4="";
           
           /*deal with the '0' in each slice.*/
           cmd_d_1 = String(cmd.substring(1,3).toInt());
           cmd_d_2 = String(cmd.substring(4,8).toInt());
           cmd_d_3 = String( cmd.substring(9,15).toInt());
           
           cmd_d_0 = '#'+cmd_d_1 + 'P' + cmd_d_2 + 'T' + cmd_d_3;       //change cmd_d_0 to cmd_d_4 to Debug
           //Serial.print("The cmd_d_4 is :");Serial.println(cmd_d_4);
           
           
           
           
           //cmd_d_0 = cmd_d_0 + cmd.substring(15,19) ;//+ "\0";
           //use substring will change/r /n into string.
          
          Serial.print("The final cmd #");Serial.print(order);Serial.print(" is:");
          Serial.println(cmd_d_0);
          //delay(wait);                //delay to start the motor
          Serial1.print(cmd_d_0);     //send cmd to usc32
          Serial1.print("\r\n");      //send \r \n to usc32 toggle the end
          delay(2);
          Serial.println(" CMD Complete");
          }// end of else
        }
      
      delay(50); // wait for accept
      Serial.println("<-------wait for accept cmd-------->");
      received="";
    }else{
      received = received+chunk; //plus char step by step
      delay(2);
    }
  }
  
}






