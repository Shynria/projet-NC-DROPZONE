package fr.formation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.formation.model.Vol;

public interface IVolDaoJpaRepository extends JpaRepository<Vol, Integer>{
    
}
