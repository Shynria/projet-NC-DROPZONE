package fr.formation.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fr.formation.model.Parachutiste;

public interface IParachutisteDaoJpaRepository extends JpaRepository<Parachutiste, Integer> {
    @Query("select p from Parachutiste p where p.nom = ?1")
    public Parachutiste findByNom(String nom);
}
