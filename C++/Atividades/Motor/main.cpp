/**/
#include <iostream>
#include "motor.h"

using namespace std;

void GetMorePotencial(Motor motor1, Motor motor2){
    if(motor1.getPotencia() > motor2.getPotencia()){
        cout << "o motor de potencia " << motor1.getPotencia();
    }else if (motor1.getPotencia() < motor2.getPotencia()){
         cout << "o motor de potencia " << motor2.getPotencia();
    }else{
        cout << "São iguais";
    }
}

int main()
{
    //Motor::Motor(string tipo, int potencia , double consumo){
Motor motor("gasolina",2,23.33);
Motor motor2("disel",10,30.49);

GetMorePotencial(motor,motor2);
}
    





