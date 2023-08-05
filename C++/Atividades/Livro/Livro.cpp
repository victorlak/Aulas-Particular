#include <iostream>
#include "Livro.h"

using namespace std;
    Livro::Livro(string titulo, string autor, int numeroDePaginas , string editor){
        
        setTitulo(titulo);
        setAutor(autor);
        setEditor(editor);
        setNumeroDePaginas(numeroDePaginas);
        
    }
        void Livro::setTitulo(string titulo){
            this->titulo = titulo;
        };
        void Livro::setAutor(string autor){
            this->autor = autor;
        };
        void Livro::setEditor(string editor){
            this->editor = editor;
        };
        void Livro::setNumeroDePaginas(int numeroDePaginas){
            this->numeroDePaginas = numeroDePaginas;
        };
        
        
        
        string Livro::getTitulo(){
            return this->titulo;
        };
        string Livro::getAutor(){
            return this->autor;
        };
        string Livro::getEditor(){
            return this->editor;
        };
        int Livro::getNumeroDePaginas(){
            return this->numeroDePaginas;
        };
        
