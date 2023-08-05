#include <iostream>
using namespace std;

class Livro{
    private:
        string titulo;
        string autor;
        int numeroDePaginas;
        string editor;
    
    public:
        Livro(string titulo, string autor, int numeroDePaginas, string editor);
        
        string getTitulo();
        void setTitulo(string titulo);
        
        string getAutor();
        void setAutor(string autor);
        
        int getNumeroDePaginas();
        void setNumeroDePaginas(int numeroDePaginas);
        
        string getEditor();
        void setEditor(string editor);
};
