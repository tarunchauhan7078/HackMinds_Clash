package com.example.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.entity.Team;
import com.example.entity.user;

@Repository
public interface TeamRepo extends JpaRepository<Team, Integer> {

	public Team findByTeamName(String teamName);
	
}
