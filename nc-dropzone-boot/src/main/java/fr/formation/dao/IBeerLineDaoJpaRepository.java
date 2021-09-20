package fr.formation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.formation.model.BeerLine;

public interface IBeerLineDaoJpaRepository extends JpaRepository<BeerLine, Integer> {
    
}
