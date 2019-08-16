package services;

import java.util.List;

import models.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import repositories.BookRepository;

@Service
public class BookService {
    
	@Autowired
	private BookRepository repo;
	
	public Book find(Integer id) {
		
		Book obj = repo.findOne(id);
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
	public void delete(Integer id) {
		find(id);
		repo.delete(id);
	}
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	public List<Book> findAll(){
		return repo.findAll();
	}
}