#include <iostream>
using namespace std;
class Carro{
    private:
        string nome;
        string marca;
        double motorizacao;
        string cor;
        double valor;
    
    public:
        Carro(string nome, string marca, double motorizacao, string cor, double valor);
        
        string getNome();
        void setNome(string nome);
        
        string getMarca();
        void setMarca(string marca);
        
        double getMotorizacao();
        void setMotorizacao(double motorizacao);
        
        string getCor();
        void setCor(string cor);
        
        double getValor();
        void setValor(double valor);
};
