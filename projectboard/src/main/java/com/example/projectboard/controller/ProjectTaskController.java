package com.example.projectboard.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projectboard.model.ProjectTask;
import com.example.projectboard.service.IProjectTaskService;

@RestController
@RequestMapping("/api/board")
@CrossOrigin
public class ProjectTaskController {
	private IProjectTaskService projectTaskService;

	public ProjectTaskController(IProjectTaskService projectTaskService) {
		super();
		this.projectTaskService = projectTaskService;
	}

	@PostMapping
	public ResponseEntity<?> addPTToBoard(@Valid @RequestBody ProjectTask projectTask, BindingResult result) {
		if(result.hasErrors()) {
			Map<String, String> errorMap=new HashMap<String, String>();
			for(FieldError error:result.getFieldErrors()) {
				errorMap.put(error.getField(), error.getDefaultMessage());
			}
			return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
		}
		ProjectTask newPT = projectTaskService.saveOrUpdateTask(projectTask);
		return new ResponseEntity<ProjectTask>(newPT, HttpStatus.CREATED);
	}
	
	@GetMapping("/all")
	public Iterable<ProjectTask> getAllPTs(){
		return projectTaskService.findAll();
	}
	@GetMapping("/{pt_id}")
	public ResponseEntity<?> getPTById(@PathVariable Long pt_id){
		Optional<ProjectTask> projectTask=projectTaskService.getById(pt_id);
		if(projectTask.isEmpty()) {
			return new ResponseEntity<String>((String.format("Task with %d id is not found", pt_id)),HttpStatus.NOT_FOUND); 
		}
		return new ResponseEntity<ProjectTask>(projectTask.get(),HttpStatus.OK);
	}
	
	@DeleteMapping("/{pt_id}")
	public ResponseEntity<?> deletePT(@PathVariable Long pt_id){
		projectTaskService.deleteById(pt_id);
		return new ResponseEntity<String>("Project Task Deleted",HttpStatus.OK);
	}
}
