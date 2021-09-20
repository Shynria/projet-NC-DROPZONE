package fr.formation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.formation.model.Parachute;

public interface IParachuteDaoJpaRepository extends JpaRepository<Parachute, Integer> {
    
}
