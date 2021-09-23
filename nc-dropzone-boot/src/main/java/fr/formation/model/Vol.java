package fr.formation.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import fr.formation.api.Views;

@Entity
@Table(name = "vol")
public class Vol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "VOL_ID")
    @JsonView(Views.Commons.class)
    private int id;

    @Column(name = "VOL_ETAT_VOL")
    @JsonView(Views.Vol.class)
    private EtatVol etatVol;

    @ManyToOne
    @JoinColumn(name = "VOL_AVION_ID")
    @JsonView(Views.Vol.class)
    private Avion avion;

    @ManyToOne
    @JsonView(Views.Vol.class)
    @JoinColumn(name = "VOL_PILOTE_ID")
    private Pilote pilote;

    @OneToMany(mappedBy = "vol")
    @JsonView(Views.Vol.class)
    private List<Saut> sauts;

    @ManyToOne
    @JoinColumn(name = "VOL_MEMBRE_ID")
    @JsonView(Views.Vol.class)
    private Parachutiste responsableVol;

    @OneToMany(mappedBy = "vol")
    @JsonView(Views.Vol.class)
    private List<SautTandem> sautsTandem;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Avion getAvion() {
        return avion;
    }

    public void setAvion(Avion avion) {
        this.avion = avion;
    }

    public Pilote getPilote() {
        return pilote;
    }

    public void setPilote(Pilote pilote) {
        this.pilote = pilote;
    }

    public List<Saut> getSauts() {
        return sauts;
    }

    public void setSauts(List<Saut> sauts) {
        this.sauts = sauts;
    }

    public Parachutiste getResponsableVol() {
        return responsableVol;
    }

    public void setResponsableVol(Parachutiste responsableVol) {
        this.responsableVol = responsableVol;
    }

    public EtatVol getEtatVol() {
        return etatVol;
    }

    public void setEtatVol(EtatVol etatVol) {
        this.etatVol = etatVol;
    }
    
}
