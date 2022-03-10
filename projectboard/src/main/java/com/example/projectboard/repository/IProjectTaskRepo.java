package com.example.projectboard.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.projectboard.model.ProjectTask;

public interface IProjectTaskRepo extends CrudRepository<ProjectTask, Long> {

}
