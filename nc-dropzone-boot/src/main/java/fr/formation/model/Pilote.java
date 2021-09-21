package fr.formation.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import fr.formation.api.Views;

@Entity
@Table(name = "pilote")
public class Pilote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PILOTE_ID")
    @JsonView(Views.Commons.class)
    private int id;

    @Column(name = "PILOTE_NOM", length = 50, nullable = false)
    @JsonView(Views.Pilote.class)
    private String nom;

    @Column(name = "PILOTE_PRENOM", length = 50, nullable = false)
    @JsonView(Views.Pilote.class)
    private String prenom;

    @Column(name = "PILOTE_LICENCE", length = 20, nullable = false)
    @JsonView(Views.Pilote.class)
    private String licence;

    @Column(name = "PILOTE_DISPONIBLE", nullable = false)
    @JsonView(Views.Pilote.class)
    private boolean disponible;

    @OneToMany(mappedBy = "pilote")
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

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getLicence() {
        return licence;
    }

    public void setLicence(String licence) {
        this.licence = licence;
    }

    public boolean isDisponible() {
        return disponible;
    }

    public void setDisponible(boolean disponible) {
        this.disponible = disponible;
    }

    public List<Vol> getVols() {
        return vols;
    }

    public void setVols(List<Vol> vols) {
        this.vols = vols;
    }

    
}
