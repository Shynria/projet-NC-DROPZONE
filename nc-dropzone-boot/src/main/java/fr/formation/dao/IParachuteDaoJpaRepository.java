package fr.formation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.formation.model.Parachute;
import fr.formation.model.Parachutiste;

public interface IParachuteDaoJpaRepository extends JpaRepository<Parachute, Integer> {
    public List<Parachute> findAllByProprietaire(Parachutiste proprietaire);
}
