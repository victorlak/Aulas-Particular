#include <iostream>
using namespace std;

class Motor{
    private:
        string tipo;
        int potencia;
        double consumo;
    
    public:
        Motor(string tipo, int potencia, double consumo);
        
        string getTipo();
        void setTipo(string tipo);
        
        int getPotencia();
        void setPotencia(int potencia);
          
        double getConsumo();
        void setConsumo(double consumo);
};
