package fr.formation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.formation.model.Parachute;

public interface IParachuteDaoJpaRepository extends JpaRepository<Parachute, Integer> {
    public List<Parachute> findAllByProprietaireId(int proprietaireID);
}
