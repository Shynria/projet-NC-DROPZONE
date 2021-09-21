package fr.formation.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import fr.formation.api.Views;

@Entity
@Table(name = "SautTandem")
public class SautTandem extends Saut {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TANDEM_ID", nullable = false)
    @JsonView(Views.Commons.class)
    private int id;

    @Column(name = "TANDEM_INSTRUCTEUR", nullable = false)
    @JsonView(Views.SautTandem.class)
    public Parachutiste instructeur;

    @Column(name = "TANDEM_VIDEOMAN", nullable = false)
    @JsonView(Views.SautTandem.class)
    public Parachutiste videoman;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Parachutiste getInstructeur() {
        return instructeur;
    }

    public void setInstructeur(Parachutiste instructeur) {
        this.instructeur = instructeur;
    }

    public Parachutiste getVideoman() {
        return videoman;
    }

    public void setVideoman(Parachutiste videoman) {
        this.videoman = videoman;
    }
}
