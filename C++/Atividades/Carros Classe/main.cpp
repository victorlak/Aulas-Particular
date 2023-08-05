/*Crie a classe carro:
- Ela terá como atributos: nome, marca, motorização, cor, valor
- Ela terá como métodos os getters, os setters, construtores, imprimir, preencher, copiar*/
#include <iostream>
#include "Carro.h"

using namespace std;

void calculatePercentage(Carro *p){
    int i = 0;
    int maior = 0;
    double carroMaisCaro;
    string nome = "";
    
    while(i < 3){
        if(p[i].getValor() > maior){
            carroMaisCaro = p[i].getValor();
            nome = p[i].getNome();
            maior = p[i].getValor();
        }
        
    i++;
    }
    
    i = 0;
    
    while(i < 3){
        if(nome != p[i].getNome()){
            double diferenca = carroMaisCaro - p[i].getValor();
            cout <<"Diferença em %, em relação ao "<<p[i].getNome()<<" é :"<< (diferenca/carroMaisCaro) * 100 << endl; 
            
        }
        i++;
    }
    
    
    
}

void areCarsOfSameBrand(Carro *p) {
    int size = 3;
    bool foundDuplicate = false;
    
    for (int i = 0; i < size; i++) {
        if (p[i].getMarca() != "") {
            foundDuplicate = false;
            for (int j = i + 1; j < size; j++) {
                if (p[i].getMarca() == p[j].getMarca()) {
                    if (!foundDuplicate) {
                        cout << p[i].getNome() << endl;
                        foundDuplicate = true;
                    }
                    cout << p[j].getNome() << endl;
                    p[j].setMarca(""); 
                }
            }
        }
    }
}
    




void findCarsWithEngineAboveOneLiter(Carro carro, Carro carro2,Carro carro3){
    if(carro.getMotorizacao() > 1.0){
        cout << carro.getNome() << endl;
    }
    if(carro2.getMotorizacao() > 1.0){
        cout << carro2.getNome() << endl;
    }
    if(carro3.getMotorizacao() > 1.0){
        cout << carro3.getNome() << endl;
    }
    
}


int main()
{
    //Carro::Carro(string nome, string marca, double motorizacao , string cor, double valor){Mercedes-Benz
    
    
    Carro carro("focus","Toyota",1.4,"vermelho",1000);
    Carro carro2("corola","Ford",1.6,"azul",600);
    Carro carro3("camry","Toyota",1.6,"azul",100);
    
    Carro carros[3] = {carro, carro2,carro3};
    Carro *p = carros;
    
    
    
    //areCarsOfSameBrand(p);
    //findCarsWithEngineAboveOneLiter(carro, carro2, carro3);
    calculatePercentage(p);
    
    
    
   
}
