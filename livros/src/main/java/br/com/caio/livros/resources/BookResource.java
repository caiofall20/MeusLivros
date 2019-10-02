package br.com.caio.livros.resources;

import java.net.URI;
import java.util.List;

import br.com.caio.livros.models.Book;

import br.com.caio.livros.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


@RestController
@RequestMapping(value = "/livros")
public class BookResource {

	@Autowired
	private BookService service;
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> find(@PathVariable Long id) {

		Book obj = service.find(id);
		return ResponseEntity.ok().body(obj);

	}
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Void> insert(@RequestBody Book obj) {
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/id").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Void> update(@RequestBody Book obj, @PathVariable Long id) {
		obj.setId(id);
		obj = service.update(obj);
		return ResponseEntity.noContent().build();
	}
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@RequestBody Book obj,@PathVariable Long id) {
		service.delete(obj);
		return ResponseEntity.noContent().build();

	}
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Book>> findAll() {

		List<Book> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
}

