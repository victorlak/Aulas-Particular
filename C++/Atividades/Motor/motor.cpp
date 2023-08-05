#include <iostream>
#include "motor.h"

using namespace std;
    Motor::Motor(string tipo, int potencia , double consumo){
        
        setTipo(tipo);
        setConsumo(consumo);
        setPotencia(potencia);
        
    }
        void Motor::setTipo(string tipo){
            if(tipo == "disel" || tipo == "eletrico" || tipo == "gasolina"){
                this->tipo = tipo;
            }
            
            this->tipo = "formato invalido";
        };
        void Motor::setConsumo(double consumo){
            this->consumo = consumo;
        };
        void Motor::setPotencia(int potencia){
            this->potencia = potencia;
        };
        
        string Motor::getTipo(){
            return this->tipo;
        };

        double Motor::getConsumo(){
            return this->consumo;
        };
        int Motor::getPotencia(){
            return this->potencia;
        };
        
