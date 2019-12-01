package br.com.caio.livros.models;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
// Nesta classe de modelo é onde serão descritos os atributos do objeto Livro.
@Entity
public class Book implements Serializable {
	private static final long serialVersionUID = 1L;
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private String title;
private String gender;
private String isbn;
private String type;
private String summary;
private Date publication_date;
private String number_pages;
private Boolean status;

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public Date getPublication_date() {
		return publication_date;
	}

	public void setPublication_date(Date publication_date) {
		this.publication_date = publication_date;
	}

	public String getNumber_pages() {
		return number_pages;
	}

	public void setNumber_pages(String number_pages) {
		this.number_pages = number_pages;
	}

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPublishy_company() {
		return publishy_company;
	}

	public void setPublishy_company(String publishy_company) {
		this.publishy_company = publishy_company;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	private String publishy_company;
private String author;



public Book(Long id, String title, String gender, String publishy_company, String author, String isbn, String type, String summary, Date publication_date, String number_pages, Boolean status ) {
	super();
	this.id = id;
	this.title = title;
	this.gender = gender;
	this.publishy_company = publishy_company;
	this.author = author;
	this.isbn = isbn;
	this.type = type;
	this.summary = summary;
	this.publication_date = publication_date;
	this.number_pages = number_pages;
	this.status = status;
	
}

public Book() {

}

@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((id == null) ? 0 : id.hashCode());
	return result;
}

@Override
public boolean equals(Object obj) {
	if (this == obj)
		return true;
	if (obj == null)
		return false;
	if (getClass() != obj.getClass())
		return false;
	Book other = (Book) obj;
	if (id == null) {
		if (other.id != null)
			return false;
	} else if (!id.equals(other.id))
		return false;
	return true;
}


}


