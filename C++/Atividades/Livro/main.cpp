#include <iostream>
#include "Livro.h"

using namespace std;

void GetMorePageNumbers(Livro livro1, Livro livro2){
    if(livro1.getNumeroDePaginas() > livro2.getNumeroDePaginas()){
        cout << livro1.getTitulo();
    }else if (livro1.getNumeroDePaginas() < livro2.getNumeroDePaginas()){
        cout << livro2.getTitulo();
    }else{
        cout << "São iguais";
    }

}


int main()

{


Livro livro("joana","Marcos",20,"Carlos");
Livro livro2("AO sol","Bruno",50,"Carlos");

GetMorePageNumbers(livro,livro2);
    
}
    





