package br.com.caio.livros.services;

import java.util.List;

import br.com.caio.livros.models.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import br.com.caio.livros.repositories.BookRepository;

// Classe onde é implementado o CRUD da aplicação.
@Service
public class BookService {

	@Autowired
	private BookRepository repo;

	public Book find(Long id) {

		Book obj = repo.getOne(id);
		return obj;

	}
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	public Book insert(Book obj) {
		obj.setId(null);
		return repo.save(obj);
	}
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	public Book update (Book obj) {
		find(obj.getId());
		return repo.save(obj);
	}
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	public void delete(Book obj) {
		find(obj.getId());
		repo.delete(obj);
	}
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	public List<Book> findAll(){
		return repo.findAll();
	}
}