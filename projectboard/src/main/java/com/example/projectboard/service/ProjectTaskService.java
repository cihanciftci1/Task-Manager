package com.example.projectboard.service;


import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.projectboard.model.ProjectTask;
import com.example.projectboard.repository.IProjectTaskRepo;

@Service
public class ProjectTaskService implements IProjectTaskService {
	private IProjectTaskRepo projectTaskRepo;

	public ProjectTaskService(IProjectTaskRepo projectTaskRepo) {
		super();
		this.projectTaskRepo = projectTaskRepo;
	}

	@Override
	public ProjectTask saveOrUpdateTask(ProjectTask projectTask) {
		if(projectTask.getStatus()==null || projectTask.getStatus()=="") {
			projectTask.setStatus("TO_DO");
		}
		return projectTaskRepo.save(projectTask);
	}

	@Override
	public Iterable<ProjectTask> findAll() {
		return projectTaskRepo.findAll();
	}

	@Override
	public Optional<ProjectTask> getById(Long id) {
		return projectTaskRepo.findById(id);
	}

	@Override
	public void deleteById(Long id) {
		projectTaskRepo.deleteById(id);
		
	}
	
	
	
	
	
}
