package com.example.springajax.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springajax.dto.Book;
import com.example.springajax.dto.ServiceResponse;

@RestController
//@RequestMapping("/api")
public class BookController {

	List<Book> bookStore = new ArrayList<>();
	
	@PostMapping("/addbook")
	public ResponseEntity<Object> addBook(@RequestBody Book book){
		bookStore.add(book);
		ServiceResponse<Book> response = new ServiceResponse<>();
		response.setStatus("success");
		response.setData(book);
		return new ResponseEntity<>(response,HttpStatus.OK);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<Object> getAllBook(){
		ServiceResponse<List<Book>> res = new ServiceResponse<>();
		res.setStatus("success");
		res.setData(bookStore);
		return new ResponseEntity<Object>(res, HttpStatus.OK);
		
	}
}
