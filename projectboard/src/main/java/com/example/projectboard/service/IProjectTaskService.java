package com.example.projectboard.service;


import java.util.Optional;

import com.example.projectboard.model.ProjectTask;

public interface IProjectTaskService {
	public ProjectTask saveOrUpdateTask(ProjectTask projectTask);
	public Iterable<ProjectTask> findAll();
	public Optional<ProjectTask> getById(Long id);
	public void deleteById(Long id);
}
