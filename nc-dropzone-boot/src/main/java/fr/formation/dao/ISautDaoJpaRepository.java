package fr.formation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.formation.model.Saut;

public interface ISautDaoJpaRepository extends JpaRepository<Saut, Integer> {
    
}
