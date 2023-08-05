#include <iostream>
#include "Carro.h"
using namespace std;
    Carro::Carro(string nome, string marca, double motorizacao , string cor, double valor){
        
        setNome(nome);
        setMarca(marca);
        setCor(cor);
        setMotorizacao(motorizacao);
        setValor(valor);
    }
        void Carro::setNome(string nome){
            this->nome = nome;
        };
        void Carro::setMarca(string marca){
            this->marca = marca;
        };
        void Carro::setCor(string cor){
            this->cor = cor;
        };
        void Carro::setMotorizacao(double motorizacao){
            this->motorizacao = motorizacao;
        };
        void Carro::setValor(double valor){
            this->valor = valor;
        };
        
        
        string Carro::getNome(){
            return this->nome;
        };
        string Carro::getMarca(){
            return this->marca;
        };
        string Carro::getCor(){
            return this->cor;
        };
        double Carro::getMotorizacao(){
            return this->motorizacao;
        };
        double Carro::getValor(){
            return this->valor;
        };
