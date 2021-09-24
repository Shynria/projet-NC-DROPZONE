package fr.formation.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import fr.formation.api.Views;

@Entity
@Table(name = "SautTandem")
public class SautTandem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TANDEM_ID", nullable = false)
    @JsonView(Views.Commons.class)
    private int id;

    @ManyToOne
    @JoinColumn(name = "TANDEM_PARACHUTISTE")
    @JsonView({Views.Saut.class, Views.Vol.class, Views.SautTandem.class})
    private Parachutiste parachutiste;

    @Column(name = "ATTERRISSAGE_TANDEM_RATE")
    @JsonView(Views.SautTandem.class)
    private boolean isOutsideZone;

    @ManyToOne
    @JoinColumn(name = "SAUT_TANDEM_VOL_ID")
    private Vol vol;

    @Column(name = "SAUT_TANDEM_HAUTEUR", nullable = false)
    @JsonView({Views.Saut.class, Views.Vol.class, Views.SautTandem.class})
    private Hauteur hauteur;

    @ManyToOne
    @JoinColumn(name = "TANDEM_INSTRUCTEUR", nullable = false)
    @JsonView({Views.Parachutiste.class, Views.SautTandem.class, Views.Vol.class})
    public Parachutiste instructeur;
    
    @ManyToOne
    @JoinColumn(name = "TANDEM_VIDEOMAN", nullable = true)
    @JsonView({Views.Parachutiste.class, Views.SautTandem.class, Views.Vol.class})
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

    public Parachutiste getParachutiste() {
        return parachutiste;
    }

    public void setParachutiste(Parachutiste parachutiste) {
        this.parachutiste = parachutiste;
    }

    public boolean isOutsideZone() {
        return isOutsideZone;
    }

    public void setOutsideZone(boolean isOutsideZone) {
        this.isOutsideZone = isOutsideZone;
    }

    public Vol getVol() {
        return vol;
    }

    public void setVol(Vol vol) {
        this.vol = vol;
    }

    public Hauteur getHauteur() {
        return hauteur;
    }

    public void setHauteur(Hauteur hauteur) {
        this.hauteur = hauteur;
    }
}
