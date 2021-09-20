package fr.formation.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "avion")
public class Avion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "AVION_ID")
    private int id;

    @Column(name = "AVION_NOM", length = 6, nullable = false)
    private String nom;

    @Column(name = "AVION_CAPACITE", nullable = false)
    private int capacite;

    @Column(name = "AVION_DISPONIBLE", nullable = false)
    private boolean disponible;

    @Column(name = "AVION_NB_ROTA_MAX", nullable = false)
    private int nbRotaMax;

    @Column(name = "AVION_ALTITUDE_MAX", nullable = false)
    private int altitudeMax;

    @OneToMany(mappedBy = "avion")
    private List<Vol> vols;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public int getCapacite() {
        return capacite;
    }

    public void setCapacite(int capacite) {
        this.capacite = capacite;
    }

    public boolean isDisponible() {
        return disponible;
    }

    public void setDisponible(boolean disponible) {
        this.disponible = disponible;
    }

    public int getNbRotaMax() {
        return nbRotaMax;
    }

    public void setNbRotaMax(int nbRotaMax) {
        this.nbRotaMax = nbRotaMax;
    }

    public int getAltitudeMax() {
        return altitudeMax;
    }

    public void setAltitudeMax(int altitudeMax) {
        this.altitudeMax = altitudeMax;
    }

    public List<Vol> getVols() {
        return vols;
    }

    public void setVols(List<Vol> vols) {
        this.vols = vols;
    }

    
}
